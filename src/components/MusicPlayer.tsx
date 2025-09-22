import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface Song {
  id: number;
  title: string;
  artist: string;
  src: string;
}

const PKS_SONGS: Song[] = [
  {
    id: 1,
    title: "Mars PKS",
    artist: "PKS Official",
    src: "/audio/mars-pks.mp3" // Placeholder - you can add actual audio files
  },
  {
    id: 2,
    title: "Hymne PKS",
    artist: "PKS Official", 
    src: "/audio/hymne-pks.mp3"
  },
  {
    id: 3,
    title: "Lagu Kebanggaan PKS",
    artist: "PKS Official",
    src: "/audio/kebanggaan-pks.mp3"
  }
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = PKS_SONGS[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % PKS_SONGS.length);
    setIsPlaying(false);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + PKS_SONGS.length) % PKS_SONGS.length);
    setIsPlaying(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSongEnd = () => {
    nextSong();
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsPlayerOpen(!isPlayerOpen)}
        className="p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-accent/50"
        title="Music Player"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>

      {/* Music Player Panel */}
      {isPlayerOpen && (
        <div className="absolute top-12 right-0 bg-card border border-border rounded-lg shadow-lg p-4 w-80 z-50">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm">🎵 PKS Music Player</h3>
            <button
              onClick={() => setIsPlayerOpen(false)}
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              ✕
            </button>
          </div>

          {/* Song Info */}
          <div className="mb-4">
            <div className="text-sm font-medium text-foreground truncate">
              {currentSong.title}
            </div>
            <div className="text-xs text-muted-foreground">
              {currentSong.artist}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <button
              onClick={prevSong}
              className="p-2 text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent"
            >
              <SkipBack className="w-4 h-4" />
            </button>
            
            <button
              onClick={togglePlay}
              className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>
            
            <button
              onClick={nextSong}
              className="p-2 text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-1 bg-muted rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Song List */}
          <div className="mt-4 pt-3 border-t border-border">
            <div className="text-xs text-muted-foreground mb-2">Playlist:</div>
            <div className="space-y-1">
              {PKS_SONGS.map((song, index) => (
                <button
                  key={song.id}
                  onClick={() => {
                    setCurrentSongIndex(index);
                    setIsPlaying(false);
                  }}
                  className={cn(
                    "w-full text-left text-xs p-2 rounded hover:bg-accent transition-colors",
                    index === currentSongIndex && "bg-accent text-primary"
                  )}
                >
                  {song.title}
                </button>
              ))}
            </div>
          </div>

          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            src={currentSong.src}
            onEnded={handleSongEnd}
            preload="none"
          />
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;