import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Sliders, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const audioRef = useRef(null);

  // Initialize and preload the genuine soft piano instrumental recording
  useEffect(() => {
    const audio = new Audio("/audio/soft-piano.mp3");
    audio.loop = true;
    audio.preload = "auto";

    const handleCanPlay = () => {
      setHasError(false);
    };

    const handleError = (e) => {
      console.warn("Audio file load notice (/audio/soft-piano.mp3):", e);
      setHasError(true);
      setIsPlaying(false);
    };

    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("error", handleError);
    audio.addEventListener("ended", handleEnded);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, []);

  // Sync volume & mute changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Explicit user-triggered Play / Pause
  const togglePlay = () => {
    if (hasError || !audioRef.current) return;

    if (!isPlaying) {
      // Ensure initial volume is set before playback starts
      audioRef.current.volume = isMuted ? 0 : volume;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Audio playback was prevented by browser policy:", err);
            setIsPlaying(false);
          });
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <aside
      aria-label="Soft Piano Music Player"
      className="fixed bottom-4 left-4 sm:bottom-5 sm:left-5 z-40 select-none print:hidden"
    >
      <div className="relative">
        {/* COMPACT FLOATING BAR / CONTROLLER */}
        <div
          className={`flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-white/95 dark:bg-[#0D1127]/95 border border-slate-200/90 dark:border-[#6366F1]/25 backdrop-blur-md shadow-lg dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-300 ${
            isExpanded ? "pr-3 sm:pr-4" : ""
          }`}
        >
          {/* Main Play/Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            disabled={hasError}
            aria-label={
              hasError
                ? "Audio unavailable"
                : isPlaying
                ? "Pause Piano Music"
                : "Play Soft Piano Music"
            }
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs transition transform active:scale-95 cursor-pointer ${
              hasError
                ? "bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-[#6366F1] dark:hover:bg-[#4F46E5]"
            }`}
            title={
              hasError
                ? "Audio recording unavailable"
                : isPlaying
                ? "Pause Piano Music"
                : "Play Soft Piano Music (Gymnopédie No. 1)"
            }
          >
            {hasError ? (
              <AlertCircle size={16} />
            ) : isPlaying ? (
              <Pause size={16} className="animate-pulse" />
            ) : (
              <Play size={16} className="ml-0.5" />
            )}
          </button>

          {/* Equalizer Visualizer & Track Info (visible on desktop or when expanded) */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsExpanded((prev) => !prev)}
            title="Click to toggle track details"
          >
            {/* Animated Equalizer Bars */}
            <div className="flex items-end gap-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 px-0.5">
              <span
                className={`w-0.5 rounded-full bg-indigo-600 dark:bg-[#38BDF8] transition-all duration-300 ${
                  isPlaying ? "h-3 animate-pulse" : "h-1"
                }`}
              />
              <span
                className={`w-0.5 rounded-full bg-indigo-600 dark:bg-[#38BDF8] transition-all duration-500 delay-75 ${
                  isPlaying ? "h-4 animate-pulse" : "h-2"
                }`}
              />
              <span
                className={`w-0.5 rounded-full bg-indigo-600 dark:bg-[#38BDF8] transition-all duration-300 delay-150 ${
                  isPlaying ? "h-2.5 animate-pulse" : "h-1"
                }`}
              />
            </div>

            {/* Track Info */}
            <div className="text-left hidden sm:block">
              <p className="text-[11px] font-semibold text-slate-800 dark:text-[#F8FAFC] leading-tight truncate max-w-[130px]">
                Soft Piano
              </p>
              <p className="text-[9px] text-slate-500 dark:text-[#94A3B8] font-mono leading-tight">
                {isPlaying ? "Playing • Gymnopédie No. 1" : "Erik Satie • Instrumental"}
              </p>
            </div>
          </div>

          {/* Controls: Mute and Volume Popover */}
          <div className="flex items-center gap-0.5 sm:gap-1 pl-1 border-l border-slate-200 dark:border-[#1E293B]">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
              className="p-1 sm:p-1.5 rounded-lg text-slate-600 hover:text-indigo-600 dark:text-[#94A3B8] dark:hover:text-[#38BDF8] hover:bg-slate-100 dark:hover:bg-[#131B38] transition cursor-pointer"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            <button
              type="button"
              onClick={() => setShowVolumeSlider((prev) => !prev)}
              aria-label="Adjust Volume"
              className="p-1 sm:p-1.5 rounded-lg text-slate-600 hover:text-indigo-600 dark:text-[#94A3B8] dark:hover:text-[#38BDF8] hover:bg-slate-100 dark:hover:bg-[#131B38] transition cursor-pointer hidden sm:block"
              title="Volume Controls"
            >
              <Sliders size={14} />
            </button>
          </div>
        </div>

        {/* VOLUME SLIDER POPOVER */}
        <AnimatePresence>
          {showVolumeSlider && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              className="absolute bottom-14 sm:bottom-16 left-0 p-3 rounded-xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/25 shadow-xl backdrop-blur-md w-48 z-50 text-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-[#94A3B8]">
                  Piano Volume
                </span>
                <span className="text-[10px] font-mono text-indigo-600 dark:text-[#38BDF8]">
                  {Math.round(volume * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-full accent-indigo-600 dark:accent-[#38BDF8] cursor-pointer"
                aria-label="Piano Volume Slider"
              />
              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-[#1E293B] text-[9px] text-slate-400 dark:text-slate-500">
                <p className="font-semibold text-slate-700 dark:text-slate-300">
                  Erik Satie: Gymnopédie No. 1
                </p>
                <p className="mt-0.5">
                  Acoustic piano performed by Kevin MacLeod · CC BY 3.0
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}
