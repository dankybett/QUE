export default function VideoPlayer({ src, captions }:{src:string; captions?:string}){
  return (
    <figure>
      <video src={src} controls className="w-full rounded-2xl">
        {captions ? <track kind="captions" src={captions} srcLang="en" label="English captions" default /> : null}
      </video>
      <figcaption className="mt-2 text-sm text-neutral-600">Video with captions. Pause anytime.</figcaption>
    </figure>
  )
}
