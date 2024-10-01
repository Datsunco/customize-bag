"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import BagSVG from "@/components/main/BagSVG";

// Define the views of the bag
const bagViews = ["Front", "Back", "Inside"];

// Define the available colors
const colors = [
  { name: "Red", value: "#FF0000" },
  { name: "Blue", value: "#0000FF" },
  { name: "Green", value: "#00FF00" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Purple", value: "#800080" },
];

export default function Home() {

  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState({
    front: "",
    right: "",
    strap: "",
  });

  const [selectedView, setSelectedView] = useState(bagViews[0]);
  // const [viewColors, setViewColors] = useState<Record<string, string>>({});
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleViewChange = (view: string) => {
    setSelectedView(view);
    const index = bagViews.indexOf(view);
    api?.scrollTo(index);
  };


  const handleColorChange = (color: string) => {
    if (selectedPoint)
      setSelectedColors((prev) => ({
        ...prev,
        [selectedPoint]: color,
      }));
  };

  useEffect(() => {
    setSelectedView(bagViews[current]);
  }, [current]);
  return (
    <div className="container mx-auto p-4 lg:p-8">
      <h1 className="text-2xl font-bold mb-4 lg:mb-8">Bag Customizer</h1>

      <div className="lg:flex lg:gap-8">
        <div className="relative w-full lg:w-2/3 mb-8 lg:mb-0">
          {/* Carousel */}
          <Carousel className="w-full  lg:w-full h-[600px]" setApi={setApi}>
            <CarouselContent>
              {bagViews.map((view, index) => (
                <CarouselItem key={index}>
                  <div className="flex  lg:w-full h-[600px] items-center justify-center bg-muted">
                    <BagSVG
                      selectedPoint={selectedPoint}
                      onPointChange={setSelectedPoint}
                      selectedColors={selectedColors}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* View selection */}
          <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm">
            <div className="flex justify-center">
              {bagViews.map((view) => (
                <button
                  key={view}
                  onClick={() => handleViewChange(view)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    selectedView === view
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Color selection */}
        <div className="lg:w-1/3">
          <h2 className="text-lg font-semibold mb-2">Select Color</h2>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <Button
                key={color.name}
                variant="outline"
                size="icon"
                className="rounded-full w-8 h-8"
                style={{ backgroundColor: color.value }}
                onClick={() => handleColorChange(color.value)}
                aria-label={`Select ${color.name}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
