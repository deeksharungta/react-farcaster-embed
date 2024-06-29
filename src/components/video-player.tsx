import "../../scripts/hls-video-element.js";
import "../../scripts/media-chrome.js";

export function VideoPlayer({ source, poster, aspectRatio }: { source: string; poster: string; aspectRatio: number }) {
  return (
    <div
      style={{
        aspectRatio,
      }}
    >
      <div
        className="farcaster-embed-video-player"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `<media-controller>
            <hls-video
              src="${source}"
              slot="media"
              volume="1"
              crossorigin
              playsinline
            ></hls-video>
            <media-poster-image
              slot="poster"
              src="${poster}">
            </media-poster-image>
            <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
            <media-control-bar>
              <media-play-button></media-play-button>
              <media-time-range></media-time-range>
              <media-time-display showduration remaining></media-time-display>
              <media-fullscreen-button></media-fullscreen-button>
            </media-control-bar>
          </media-controller>`,
        }}
      ></div>
    </div>
  );
}
