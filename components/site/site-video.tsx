export function SiteVideo() {
  return (
    <section aria-label="NutriSnap video" className="border-t bg-black">
      <div className="mx-auto flex max-w-5xl justify-center px-4 py-8 md:py-10">
        <video
          className="block aspect-[9/16] h-[70vh] max-h-[560px] w-auto rounded-2xl bg-black shadow-2xl"
          src="/videos/site-video.mp4"
          controls
          playsInline
          preload="metadata"
          aria-label="NutriSnap video"
        />
      </div>
    </section>
  )
}
