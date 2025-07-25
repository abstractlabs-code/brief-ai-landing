import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import demoFrame1 from '@/assets/demo-frame-1.jpg';
import demoFrame2 from '@/assets/demo-frame-2.jpg';
import demoFrame3 from '@/assets/demo-frame-3.jpg';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const demoFrames = [demoFrame1, demoFrame2, demoFrame3];
  const frameDuration = 3000; // 3 seconds per frame

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (isPlaying) {
      // Pause the demo
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsPlaying(false);
    } else {
      // Start the demo
      setIsPlaying(true);
      intervalRef.current = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % demoFrames.length);
      }, frameDuration);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Clean up interval when modal closes or component unmounts
  useEffect(() => {
    if (!isOpen && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsPlaying(false);
      setCurrentFrame(0);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div ref={modalRef} className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scale-in">
        <div className="flex items-center justify-between p-4 lg:p-6 border-b border-border/50">
          <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
            Briefly Product Demo
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-accent rounded-full w-8 h-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="relative aspect-video bg-black overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={demoFrames[currentFrame]}
              alt={`Briefly Platform Demo - Frame ${currentFrame + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/20" />
            )}
          </div>
          
          {/* Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={togglePlay}
              size="lg"
              className="bg-primary/90 hover:bg-primary text-white rounded-full w-16 h-16 p-0 shadow-lg hover:scale-110 transition-all duration-300"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </Button>
          </div>

          {/* Volume Control */}
          <div className="absolute bottom-4 right-4">
            <Button
              onClick={toggleMute}
              size="sm"
              variant="secondary"
              className="bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 p-0 transition-all duration-300"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
        
        <div className="p-4 lg:p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-muted-foreground text-sm lg:text-base">
              See how Briefly transforms your meeting workflow with AI-powered transcription, 
              smart summaries, and automated action items.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Demo {currentFrame + 1} / {demoFrames.length}
            </div>
          </div>
          <div className="flex gap-2">
            {demoFrames.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full flex-1 transition-colors duration-300 ${
                  index === currentFrame ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;