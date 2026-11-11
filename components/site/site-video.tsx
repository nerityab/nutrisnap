export function SiteVideo() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-4 right-4 z-40 w-44 overflow-hidden rounded-2xl shadow-xl md:w-60"
    >
      <video
        className="block aspect-[9/16] w-full object-cover"
        src="/videos/site-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  )
}
