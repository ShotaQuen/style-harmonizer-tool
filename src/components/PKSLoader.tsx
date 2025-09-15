import { Shield, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface PKSLoaderProps {
  onLoadingComplete: () => void;
}

const PKSLoader = ({ onLoadingComplete }: PKSLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stageTimer = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(stageTimer);
    };
  }, [onLoadingComplete]);

  const loadingTexts = [
    "Memuat sistem keamanan...",
    "Menginisialisasi patroli...",
    "Siap melayani!"
  ];

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, hsl(var(--secondary)) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, hsl(var(--accent)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative text-center space-y-8">
        {/* Main Logo Animation */}
        <div className="relative">
          {/* Rotating Background Circle */}
          <div className="absolute inset-0 w-32 h-32 mx-auto">
            <div className="w-full h-full border-4 border-primary/20 rounded-full animate-spin" 
                 style={{ animationDuration: '3s' }} />
            <div className="absolute inset-2 border-2 border-secondary/30 rounded-full animate-spin" 
                 style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
          </div>

          {/* Central Shield */}
          <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-glow animate-pulse">
              <Shield className="w-10 h-10 text-white animate-bounce" 
                     style={{ animationDuration: '2s' }} />
            </div>
          </div>

          {/* Floating Stars */}
          <div className="absolute -top-4 -right-4">
            <Star className="w-6 h-6 text-primary animate-ping" />
          </div>
          <div className="absolute -bottom-4 -left-4">
            <Star className="w-4 h-4 text-secondary animate-ping" 
                 style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute top-8 -left-8">
            <Star className="w-5 h-5 text-accent animate-ping" 
                 style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* PKS Text */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-pks animate-pulse">PKS</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium">
            Patroli Keamanan Sekolah
          </p>
        </div>

        {/* Loading Progress */}
        <div className="space-y-4 min-w-[300px]">
          {/* Progress Bar */}
          <div className="w-full bg-border rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out rounded-full shadow-glow"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading Text */}
          <div className="h-6">
            <p className="text-sm text-muted-foreground animate-fade-in">
              {loadingTexts[stage]}
            </p>
          </div>

          {/* Progress Percentage */}
          <p className="text-xs text-muted-foreground/70 font-mono">
            {progress}%
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse" 
               style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/5 rounded-full blur-xl animate-pulse" 
               style={{ animationDelay: '1s', animationDuration: '3s' }} />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-pulse" 
               style={{ animationDelay: '2s', animationDuration: '5s' }} />
        </div>
      </div>
    </div>
  );
};

export default PKSLoader;