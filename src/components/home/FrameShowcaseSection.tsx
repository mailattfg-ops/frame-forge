import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import showcaseSpeakerFrame from "@/assets/showcase-speaker-frame.png";
import showcaseAttendeeBadge from "@/assets/showcase-attendee-badge.png";
import featureAiVisuals from "@/assets/feature-ai-visuals.jpeg";
import frame1 from "@/assets/Frame 2087326588.png";
import frame2 from "@/assets/Frame 2087326589.png";
import frame3 from "@/assets/Frame 2087326590.png";
import frame4 from "@/assets/Frame 2087326592.png";
import frame5 from "@/assets/Frame 2087326593.png";
import instagramStoryMockup from "@/assets/Instagram story mockup.png";
import story1 from "@/assets/Story 1.png";
import story2 from "@/assets/Story 2.png";
import story3 from "@/assets/Story 3.png";

const frames = [
  {
    id: 1,
    image: showcaseSpeakerFrame,
    title: "Conference Speaker Frame",
    description: "Professional event frame with speaker details and branding",
  },
  {
    id: 2,
    image: showcaseAttendeeBadge,
    title: "Summit Attendee Badge",
    description: "Elegant badge design for summit participants",
  },
  {
    id: 3,
    image: featureAiVisuals,
    title: "AI Visual Showcase",
    description: "Stunning AI-generated visuals for your events",
  },
  {
    id: 4,
    image: frame1,
    title: "Modern Event Frame",
    description: "Sleek and professional design for any occasion",
  },
  {
    id: 5,
    image: frame2,
    title: "Creative Summit Frame",
    description: "Bold colors and unique layout for creative summits",
  },
  {
    id: 6,
    image: frame3,
    title: "Tech Conference Frame",
    description: "High-tech aesthetic for technology-focused events",
  },
  {
    id: 7,
    image: frame4,
    title: "Gala Dinner Frame",
    description: "Sophisticated and elegant frame for formal gatherings",
  },
  {
    id: 8,
    image: frame5,
    title: "Startup Pitch Frame",
    description: "Dynamic and energetic design for startup events",
  },
  {
    id: 9,
    image: instagramStoryMockup,
    title: "Instagram Story Frame",
    description: "Optimized frame for social media engagement",
  },
  {
    id: 10,
    image: story1,
    title: "Personal Branding Story",
    description: "Highlight your personal brand on social media",
  },
  {
    id: 11,
    image: story2,
    title: "Event Highlight Story",
    description: "Share the best moments of your event",
  },
  {
    id: 12,
    image: story3,
    title: "Speaker Spotlight Story",
    description: "Introduce your speakers to your audience",
  },
];

export function FrameShowcaseSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See What You Can <span className="text-primary">Create</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real examples of frames created by event organizers using Frameforge.one
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {frames.map((frame, index) => (
                <motion.div
                  key={frame.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_40%] px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="group relative">
                    {/* Frame Card */}
                    <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/50">
                      {/* Image */}
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={frame.image}
                          alt={frame.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Frame Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-primary-foreground font-semibold text-lg mb-1">
                          {frame.title}
                        </h3>
                        <p className="text-primary-foreground/80 text-sm">
                          {frame.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden md:flex rounded-full shadow-lg bg-background"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden md:flex rounded-full shadow-lg bg-background"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {frames.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
