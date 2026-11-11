export function SiteVideo() {
  return (
    <div className="fixed bottom-4 right-4 z-40 w-72 overflow-hidden rounded-2xl shadow-2xl md:w-80">
      <video
        className="block aspect-[9/16] w-full bg-black object-cover"
        src="/videos/site-video.mp4"
        controls
        playsInline
        preload="metadata"
        aria-label="NutriSnap video"
      />
    </div>
  )
}
