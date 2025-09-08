function getYouTubeEmbedUrl(url: string): string | null {
  // Handle various YouTube URL formats
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regex);
  
  if (match) {
    const videoId = match[1];
    // Extract timestamp if present (e.g., &t=65s)
    const timeMatch = url.match(/[?&]t=(\d+)/);
    const startTime = timeMatch ? `?start=${timeMatch[1]}` : '';
    return `https://www.youtube.com/embed/${videoId}${startTime}`;
  }
  
  return null;
}

function isValidVideoFile(url: string): boolean {
  return /\.(mp4|webm|ogg|mov)$/i.test(url);
}

export default function VideoPlayer({ src, captions }:{src:string; captions?:string}){
  const youtubeEmbedUrl = getYouTubeEmbedUrl(src);
  const isVideoFile = isValidVideoFile(src);
  
  if (youtubeEmbedUrl) {
    // YouTube embedded video
    return (
      <figure className="my-6">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            src={youtubeEmbedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-lg"
          />
        </div>
        <figcaption className="mt-2 text-sm text-neutral-600">
          Video with captions available on YouTube. Pause anytime.
        </figcaption>
      </figure>
    );
  }
  
  if (isVideoFile) {
    // Direct video file
    return (
      <figure className="my-6">
        <video src={src} controls className="w-full rounded-lg">
          {captions ? <track kind="captions" src={captions} srcLang="en" label="English captions" default /> : null}
        </video>
        <figcaption className="mt-2 text-sm text-neutral-600">
          Video with captions. Pause anytime.
        </figcaption>
      </figure>
    );
  }
  
  // Fallback for unsupported URLs
  return (
    <figure className="my-6">
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <p className="text-gray-600 mb-2">Video content</p>
        <a 
          href={src} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          View video: {src}
        </a>
      </div>
      <figcaption className="mt-2 text-sm text-neutral-600">
        Click the link above to view this video in a new tab.
      </figcaption>
    </figure>
  );
}
