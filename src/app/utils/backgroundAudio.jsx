"use client";
import { useEffect, useRef } from "react";

const BackgroundAudio = () => {
  const audioRef = useRef();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  return <audio ref={audioRef} src="/figurante.mp3" autoPlay loop hidden />;
};

export default BackgroundAudio;
