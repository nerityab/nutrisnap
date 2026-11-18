/* Set these to your real links. A section stays hidden while its value is empty. */
export const SITE_YOUTUBE_VIDEO_ID = ''
export const SITE_CALENDAR_ID = ''

export function MapEmbed({ query, title }: { query: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border">
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        className="block h-[360px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}

export function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="aspect-video overflow-hidden rounded-3xl border bg-black">
      <iframe
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`}
        className="block h-full w-full border-0"
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export function CalendarEmbed({ calendarId, title }: { calendarId: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border">
      <iframe
        title={title}
        src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=Asia%2FKolkata`}
        className="block h-[600px] w-full border-0"
        loading="lazy"
      />
    </div>
  )
}
