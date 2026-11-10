import os

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"
MODEL = "openai/gpt-oss-120b"

SYSTEM_PROMPT = (
    "You are the chat assistant on Pritam Bose's personal portfolio website. "
    "Answer ONLY questions about Pritam Bose: his skills, projects, background, education, "
    "certifications, experience, and how to contact him. Keep answers brief (2-4 sentences). "
    "Pritam is a developer focused on applied Generative AI, full-stack web development "
    "(React, FastAPI) and cybersecurity (VAPT, OWASP Top 10, Burp Suite, Nmap, Wireshark). "
    "For ANY question that is not about Pritam — general knowledge, coding help, other "
    "people, current events — reply with a short polite refusal like: \"Sorry, I can only "
    "answer questions about Pritam Bose. Use the Contact page to reach him directly.\" "
    "Never answer off-topic questions, even if you know the answer."
)

# Vercel detects the exported ASGI `app` in api/chat.py as a Python function
app = FastAPI(title="Portfolio Chatbot")


class Message(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: list[Message]


@app.get("/api/health")
def health():
    return {"status": "ok", "model": MODEL}


@app.post("/api/chat")
async def chat(body: ChatRequest):
    if not GROQ_API_KEY:
        raise HTTPException(500, "GROQ_API_KEY is not set on the server")

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    messages += [m.model_dump() for m in body.messages]

    async with httpx.AsyncClient(timeout=60) as client:
        try:
            res = await client.post(
                GROQ_URL,
                headers={"Authorization": f"Bearer {GROQ_API_KEY}"},
                json={
                    "model": MODEL,
                    "messages": messages,
                    "temperature": 0.7,
                    "max_tokens": 500,
                },
            )
            res.raise_for_status()
        except httpx.HTTPStatusError as exc:
            raise HTTPException(exc.response.status_code, "Groq API error") from exc
        except httpx.HTTPError as exc:
            raise HTTPException(502, "Could not reach Groq API") from exc

    reply = res.json()["choices"][0]["message"]["content"]
    return {"reply": reply}
