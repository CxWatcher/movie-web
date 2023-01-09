import { BackdropControl } from "./controls/BackdropControl";
import { FullscreenControl } from "./controls/FullscreenControl";
import { LoadingControl } from "./controls/LoadingControl";
import { PauseControl } from "./controls/PauseControl";
import { ProgressControl } from "./controls/ProgressControl";
import { TimeControl } from "./controls/TimeControl";
import { VolumeControl } from "./controls/VolumeControl";
import { VideoPlayer, VideoPlayerProps } from "./VideoPlayer";

export function DecoratedVideoPlayer(props: VideoPlayerProps) {
  return (
    <VideoPlayer autoPlay={props.autoPlay}>
      <BackdropControl>
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingControl />
        </div>
        <div className="pointer-events-auto absolute inset-x-0 bottom-0 mb-4 flex flex-col px-6">
          <ProgressControl />
          <div className="flex items-center">
            <PauseControl />
            <VolumeControl className="mr-2" />
            <TimeControl />
            <div className="flex-1" />
            <FullscreenControl />
          </div>
        </div>
      </BackdropControl>
      {props.children}
    </VideoPlayer>
  );
}
