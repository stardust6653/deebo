import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import WaveSurfer from "wavesurfer.js";

interface Props {
  url: string;
  setPlay: Dispatch<SetStateAction<boolean>>;
  play: boolean;
}

const formWaveSurferOptions = (ref: any) => ({
  container: ref,
  waveColor: "#aaa",
  progressColor: "#45B1E8",
  cursorColor: "#45B1E8",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  width: 540,
  height: 80,
  normalize: true,
  partialRender: true,
});

export default function Waveform({ url, setPlay, play }: Props) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    const options = formWaveSurferOptions(waveformRef.current);
    const abortController = new AbortController();

    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current
      .load(url, undefined, abortController.signal as any)
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Audio loading aborted");
        } else {
          console.error("Error loading audio:", error);
        }
      });

    wavesurfer.current.on("ready", function () {
      console.log("Audio is ready");
      if (wavesurfer.current) {
        wavesurfer.current.play();
      }
    });

    return () => {
      abortController.abort(); // Abort any ongoing audio loading
      console.log("Audio loading aborted");
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!play);
    wavesurfer.current?.playPause();
  };

  return (
    <div className="flex items-center">
      <div id="waveform" ref={waveformRef} />
      <div className="controls">
        <div
          onClick={handlePlayPause}
          className="ml-8 flex justify-center items-center text-2xl rounded-full w-[60px] h-[60px] bg-blue-500 text-white cursor-pointer"
        >
          <div className="">{play ? <FaStop /> : <FaPlay />}</div>
        </div>
      </div>
    </div>
  );
}
