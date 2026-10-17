// A live, scaled-down view of a deployed site so visitors can see the real
// interface without leaving the portfolio. The iframe renders at desktop
// width and is shrunk to fit the card; pointer-events stay off so scrolling
// the portfolio never gets trapped inside the preview.
const PREVIEW_WIDTH = 1280;
const PREVIEW_HEIGHT = 800;
const SCALE = 0.38;

export default function SitePreview({ url, title }) {
  return (
    <div className="relative mb-4 h-52 rounded-xl overflow-hidden border border-border-light bg-white flex justify-center">
      <div
        className="shrink-0"
        style={{ width: PREVIEW_WIDTH * SCALE, height: PREVIEW_HEIGHT * SCALE }}
      >
        <iframe
          src={url}
          title={`Live preview of ${title}`}
          loading="lazy"
          tabIndex={-1}
          aria-label={`Live preview of ${title}`}
          className="pointer-events-none border-0"
          style={{
            width: PREVIEW_WIDTH,
            height: PREVIEW_HEIGHT,
            transform: `scale(${SCALE})`,
            transformOrigin: 'top left',
          }}
        />
      </div>
      <span className="absolute top-2 left-2 text-[10px] font-semibold uppercase tracking-wide text-text-muted bg-white/90 border border-border-light rounded-full px-2 py-0.5">
        Live preview
      </span>
    </div>
  );
}
