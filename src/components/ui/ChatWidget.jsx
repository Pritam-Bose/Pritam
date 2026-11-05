import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';

const API_URL = 'http://localhost:8000/chat';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setMessages([...nextMessages, { role: 'assistant', content: data.reply }]);
    } catch {
      setError(true);
      setMessages(nextMessages.slice(0, -1));
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="fixed bottom-24 left-4 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl border border-border shadow-2xl shadow-primary/10 flex flex-col overflow-hidden"
          >
            <div className="flex items-center gap-2.5 px-4 py-3 bg-primary text-white">
              <MessageCircle size={18} />
              <p className="text-sm font-semibold">Ask about Pritam</p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="ml-auto hover:opacity-75 transition-opacity"
              >
                <X size={18} />
              </button>
            </div>

            <div
              ref={listRef}
              className="flex flex-col gap-2 p-4 h-72 overflow-y-auto bg-bg"
            >
              {messages.length === 0 && (
                <p className="self-center text-sm text-text-secondary text-center mt-10 max-w-[220px]">
                  Hi! Ask me anything about Pritam&apos;s skills, projects or background.
                </p>
              )}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[82%] px-3 py-2 text-sm leading-relaxed rounded-xl whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'self-end bg-primary text-white rounded-br-sm'
                      : 'self-start bg-white border border-border text-text-main rounded-bl-sm'
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="self-start bg-white border border-border rounded-xl rounded-bl-sm px-3.5 py-2.5">
                  <span className="flex gap-1" aria-label="Assistant is typing">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce"
                        style={{ animationDelay: `${d * 150}ms` }}
                      />
                    ))}
                  </span>
                </div>
              )}
              {error && (
                <p className="self-center text-xs text-red-500 text-center">
                  Couldn&apos;t reach the assistant. Is the FastAPI server running?
                </p>
              )}
            </div>

            <div className="flex items-end gap-2 p-3 border-t border-border-light bg-white">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="enter your message..."
                rows={1}
                aria-label="Chat message"
                className="flex-1 resize-none max-h-28 px-3 py-2 text-sm text-text-main bg-bg border border-border-light rounded-xl outline-none focus:border-primary transition-colors placeholder:text-text-muted"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                <Send size={17} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 left-4 z-50 p-4 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-dark transition-colors"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </>
  );
}
