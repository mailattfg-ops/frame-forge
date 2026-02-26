import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Download, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ImageConfig {
  id: string;
  name: string;
  filename: string;
  prompt: string;
  section: "features" | "showcase";
}

const imageConfigs: ImageConfig[] = [
  // Features Section
  {
    id: "ai-frames",
    name: "AI Event Frames",
    filename: "feature-ai-frames",
    section: "features",
    prompt: "A professional event photo frame mockup, showing a business person's professional headshot photo inside an elegant decorative frame with corporate event branding, gold and black color scheme, conference logo overlay, modern minimalist design, high quality marketing material, 4:3 aspect ratio",
  },
  {
    id: "smart-badges",
    name: "Smart Badges",
    filename: "feature-smart-badges",
    section: "features",
    prompt: "A modern digital event badge design mockup, featuring a professional photo, person's name and title, QR code, social media sharing icons, sleek black and white design with accent colors, shareable social media format, professional networking badge, 4:3 aspect ratio",
  },
  {
    id: "ai-visuals",
    name: "AI Visuals",
    filename: "feature-ai-visuals",
    section: "features",
    prompt: "Abstract AI-generated artistic event graphics, vibrant gradient colors, geometric patterns, celebration elements like confetti and stage lighting, futuristic tech conference aesthetic, creative marketing visual design, 4:3 aspect ratio",
  },
  {
    id: "custom-design",
    name: "Custom Design",
    filename: "feature-custom-design",
    section: "features",
    prompt: "A collage of branded event marketing materials including banners, posters, social media templates, and promotional graphics, cohesive brand identity design, professional marketing suite, multiple design elements arranged aesthetically, 4:3 aspect ratio",
  },
  // Showcase Section
  {
    id: "speaker-frame",
    name: "Conference Speaker Frame",
    filename: "showcase-speaker-frame",
    section: "showcase",
    prompt: "A conference speaker presentation frame, professional headshot with name title and company, stage-ready speaker card design, keynote speaker badge with microphone icon, corporate event branding, premium design, 3:4 aspect ratio portrait",
  },
  {
    id: "attendee-badge",
    name: "Summit Attendee Badge",
    filename: "showcase-attendee-badge",
    section: "showcase",
    prompt: "An elegant summit attendee badge, VIP event pass design with professional photo, participant name and role, networking QR code, premium gold accents on black background, exclusive event branding, 3:4 aspect ratio portrait",
  },
  {
    id: "workshop-certificate",
    name: "Workshop Certificate",
    filename: "showcase-workshop-certificate",
    section: "showcase",
    prompt: "A workshop completion certificate frame design, achievement badge with decorative borders, certification seal, workshop title and organizer branding, accomplishment recognition design, elegant certificate style, 3:4 aspect ratio portrait",
  },
  {
    id: "virtual-event",
    name: "Virtual Event Frame",
    filename: "showcase-virtual-event",
    section: "showcase",
    prompt: "A digital frame overlay for video calls and live streaming, webcam-friendly design with event branding, hashtag display, online event frame for virtual conferences, modern streaming overlay design, 3:4 aspect ratio portrait",
  },
];

interface GeneratedImage {
  id: string;
  imageUrl: string;
}

export function ImageGenerator() {
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [generating, setGenerating] = useState<string | null>(null);
  const [generatingAll, setGeneratingAll] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const generateImage = async (config: ImageConfig): Promise<string | null> => {
    try {
      const { data, error } = await supabase.functions.invoke("generate-image", {
        body: { prompt: config.prompt },
      });

      if (error) {
        throw error;
      }

      if (data.error) {
        throw new Error(data.error);
      }

      return data.imageUrl;
    } catch (error) {
      console.error(`Error generating ${config.name}:`, error);
      toast({
        title: `Failed to generate ${config.name}`,
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
      return null;
    }
  };

  const handleGenerateSingle = async (config: ImageConfig) => {
    setGenerating(config.id);
    const imageUrl = await generateImage(config);
    if (imageUrl) {
      setGeneratedImages((prev) => ({ ...prev, [config.id]: imageUrl }));
      toast({
        title: `${config.name} generated!`,
        description: "You can now download it.",
      });
    }
    setGenerating(null);
  };

  const handleGenerateAll = async () => {
    setGeneratingAll(true);
    setProgress(0);

    for (let i = 0; i < imageConfigs.length; i++) {
      const config = imageConfigs[i];
      setGenerating(config.id);
      
      const imageUrl = await generateImage(config);
      if (imageUrl) {
        setGeneratedImages((prev) => ({ ...prev, [config.id]: imageUrl }));
      }
      
      setProgress(((i + 1) / imageConfigs.length) * 100);
      
      // Small delay between requests to avoid rate limiting
      if (i < imageConfigs.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    setGenerating(null);
    setGeneratingAll(false);
    toast({
      title: "All images generated!",
      description: "You can now download them individually.",
    });
  };

  const downloadImage = (config: ImageConfig) => {
    const imageUrl = generatedImages[config.id];
    if (!imageUrl) return;

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${config.filename}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const featuresImages = imageConfigs.filter((c) => c.section === "features");
  const showcaseImages = imageConfigs.filter((c) => c.section === "showcase");

  return (
    <div className="space-y-8">
      {/* Generate All Button */}
      <div className="flex items-center gap-4">
        <Button
          size="lg"
          onClick={handleGenerateAll}
          disabled={generatingAll || generating !== null}
        >
          {generatingAll ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating All...
            </>
          ) : (
            "Generate All 8 Images"
          )}
        </Button>
        {generatingAll && (
          <div className="flex-1 max-w-xs">
            <Progress value={progress} />
            <p className="text-sm text-muted-foreground mt-1">
              {Math.round(progress)}% complete
            </p>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Features Section Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuresImages.map((config) => (
            <Card key={config.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{config.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                  {generatedImages[config.id] ? (
                    <img
                      src={generatedImages[config.id]}
                      alt={config.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      {generating === config.id ? (
                        <Loader2 className="h-6 w-6 animate-spin" />
                      ) : (
                        "No image yet"
                      )}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleGenerateSingle(config)}
                    disabled={generating !== null || generatingAll}
                  >
                    {generating === config.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <RefreshCw className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => downloadImage(config)}
                    disabled={!generatedImages[config.id]}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Showcase Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Showcase Carousel Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {showcaseImages.map((config) => (
            <Card key={config.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{config.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
                  {generatedImages[config.id] ? (
                    <img
                      src={generatedImages[config.id]}
                      alt={config.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      {generating === config.id ? (
                        <Loader2 className="h-6 w-6 animate-spin" />
                      ) : (
                        "No image yet"
                      )}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleGenerateSingle(config)}
                    disabled={generating !== null || generatingAll}
                  >
                    {generating === config.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <RefreshCw className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => downloadImage(config)}
                    disabled={!generatedImages[config.id]}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
