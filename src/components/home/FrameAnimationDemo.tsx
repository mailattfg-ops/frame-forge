import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Upload, ImageIcon, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import sampleFrame from "@/assets/sample-frame-1.jpg";

type AnimationStage = "photo" | "uploading" | "processing" | "framing" | "complete";

export function FrameAnimationDemo() {
  const [stage, setStage] = useState<AnimationStage>("photo");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Photo stage
      setStage("photo");
      setProgress(0);
      await delay(1500);

      // Uploading stage
      setStage("uploading");
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i);
        await delay(80);
      }
      await delay(300);

      // Processing stage
      setStage("processing");
      await delay(1200);

      // Framing stage
      setStage("framing");
      await delay(1500);

      // Complete stage
      setStage("complete");
      await delay(2500);

      // Reset
      setStage("photo");
    };

    sequence();
    const interval = setInterval(sequence, 8500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Phone Frame */}
      <div className="relative bg-card border-4 border-foreground/20 rounded-[2.5rem] p-2 shadow-2xl">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/20 rounded-b-2xl" />
        
        {/* Screen */}
        <div className="relative bg-muted rounded-[2rem] overflow-hidden aspect-[9/16]">
          <AnimatePresence mode="wait">
            {/* Photo Placeholder Stage */}
            {stage === "photo" && (
              <motion.div
                key="photo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8"
              >
                <div className="w-32 h-32 rounded-full bg-muted-foreground/10 border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-4">
                  <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
                </div>
                <p className="text-muted-foreground text-sm text-center">
                  Upload your photo
                </p>
              </motion.div>
            )}

            {/* Uploading Stage */}
            {stage === "uploading" && (
              <motion.div
                key="uploading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="mb-6"
                >
                  <Upload className="w-16 h-16 text-primary" />
                </motion.div>
                <div className="w-full max-w-[200px] mb-2">
                  <Progress value={progress} className="h-2" />
                </div>
                <p className="text-muted-foreground text-sm">Uploading... {progress}%</p>
              </motion.div>
            )}

            {/* Processing Stage */}
            {stage === "processing" && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8"
              >
                <div className="relative">
                  {/* Center sparkle */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  >
                    <Sparkles className="w-16 h-16 text-primary" />
                  </motion.div>
                  {/* Orbiting sparkles */}
                  {[0, 120, 240].map((angle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4"
                      style={{
                        top: "50%",
                        left: "50%",
                      }}
                      animate={{
                        x: [
                          Math.cos((angle * Math.PI) / 180) * 40,
                          Math.cos(((angle + 360) * Math.PI) / 180) * 40,
                        ],
                        y: [
                          Math.sin((angle * Math.PI) / 180) * 40,
                          Math.sin(((angle + 360) * Math.PI) / 180) * 40,
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-primary/60" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-primary text-sm font-medium mt-6">AI Magic in progress...</p>
              </motion.div>
            )}

            {/* Framing Stage */}
            {stage === "framing" && (
              <motion.div
                key="framing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                {/* Sample photo fades in */}
                <motion.img
                  src={sampleFrame}
                  alt="Event frame"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Frame overlay animation */}
                <motion.div
                  className="absolute inset-0 border-4 border-primary"
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </motion.div>
            )}

            {/* Complete Stage */}
            {stage === "complete" && (
              <motion.div
                key="complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                <motion.img
                  src={sampleFrame}
                  alt="Completed frame"
                  className="w-full h-full object-cover"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
                {/* Success badge */}
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Ready to share!</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Stage Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {(["photo", "uploading", "processing", "framing", "complete"] as AnimationStage[]).map((s) => (
          <div
            key={s}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              s === stage ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
