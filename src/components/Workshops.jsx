import { workshops } from '../data/workshops';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

function getPreviewUrl(url) {
  try {
    const source = new URL(url);
    const presentation = source.pathname.match(/^\/presentation\/d\/([\w-]+)(?:\/|$)/);
    if (source.hostname !== 'docs.google.com' || !presentation) return null;

    const preview = new URL(`https://docs.google.com/presentation/d/${presentation[1]}/embed`);
    preview.searchParams.set('start', 'false');
    preview.searchParams.set('loop', 'false');
    const slide = source.searchParams.get('slide') || new URLSearchParams(source.hash.slice(1)).get('slide');
    if (slide) preview.searchParams.set('slide', slide);
    return preview.href;
  } catch {
    return null;
  }
}

export default function Workshops() {
  return (
    <section aria-label="Workshops">
      {workshops.length === 0 ? (
        <p className="text-secondary">Workshop details coming soon.</p>
      ) : (
        <div className="space-y-8">
          {[...workshops].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? '')).map((workshop) => {
            const previewUrl = getPreviewUrl(workshop.url);
            return (
            <article key={`${workshop.date}-${workshop.url}`}>
              {workshop.date ? (
                <time dateTime={workshop.date} className="text-sm text-tertiary">
                  {dateFormatter.format(new Date(`${workshop.date}T00:00:00Z`))}
                </time>
              ) : (
                <span className="text-sm text-tertiary">Date to be announced</span>
              )}
              <h3 className="mt-1 text-lg font-medium text-primary">
                <a href={workshop.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline underline-offset-4">
                  {workshop.title}
                </a>
              </h3>
              <p className="mt-2 mb-4 text-sm text-secondary leading-relaxed">
                {workshop.description}
              </p>
              {previewUrl ? (
                <div className="mb-3 overflow-hidden rounded-xl border border-custom bg-secondary">
                  <iframe
                    src={previewUrl}
                    title={`${workshop.title} — slide preview`}
                    loading="lazy"
                    allowFullScreen
                    className="block w-full aspect-video border-0"
                  />
                  <p className="px-4 py-2 text-xs text-tertiary">
                    If the preview is unavailable, open the slides using the title above.
                  </p>
                </div>
              ) : (
              <a
                href={workshop.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Preview: ${workshop.title}`}
                className="block overflow-hidden rounded-xl border border-custom bg-secondary hover-bg-secondary transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <p className="p-4 text-sm text-secondary break-all">{workshop.url}</p>
              </a>
              )}
            </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
