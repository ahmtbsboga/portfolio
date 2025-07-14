"use client";
import { useEffect, useRef, useState } from "react";

import { MdMusicOff, MdMusicNote } from "react-icons/md";

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => setIsPlaying(false));
      }
    }
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/figurante.mp3" loop hidden />
      <button
        onClick={toggleAudio}
        className="fixed bottom-5 right-5 z-150 text-black bg-gray-300 p-3 rounded-full hover:bg-black/80 transition-all hover:text-white"
      >
        {!isPlaying ? <MdMusicOff size={20} /> : <MdMusicNote size={20} />}
      </button>
    </>
  );
};

export default BackgroundAudio;
