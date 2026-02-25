import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import showcaseSpeakerFrame from "@/assets/showcase-speaker-frame.png";
import showcaseAttendeeBadge from "@/assets/showcase-attendee-badge.png";
import showcaseWorkshopCertificate from "@/assets/showcase-workshop-certificate.png";
import showcaseVirtualEvent from "@/assets/showcase-virtual-event.png";
import showcaseMockup from "@/assets/showcase-mockup.png";
import showcaseJungle from "@/assets/showcase-jungle.png";
import showcaseStoryFrame from "@/assets/showcase-story-frame.png";
import showcaseEventPoster from "@/assets/showcase-event-poster.jpeg";

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
    image: showcaseWorkshopCertificate,
    title: "Workshop Certificate",
    description: "Achievement frame for workshop completions",
  },
  {
    id: 4,
    image: showcaseVirtualEvent,
    title: "Virtual Event Frame",
    description: "Digital frame for online event engagement",
  },
  {
    id: 5,
    image: showcaseMockup,
    title: "Instagram Story Mockup",
    description: "Generate buzz with natural user-driven marketing",
  },
  {
    id: 6,
    image: showcaseJungle,
    title: "AI Character Transform",
    description: "Transform photos into cinematic character portraits",
  },
  {
    id: 7,
    image: showcaseStoryFrame,
    title: "Social Media Story Frame",
    description: "Instagram-ready story frame with event branding overlay",
  },
  {
    id: 8,
    image: showcaseEventPoster,
    title: "AI Event Poster",
    description: "Stylized AI artwork poster with event branding and details",
  },
];

export function FrameShowcaseSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
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
