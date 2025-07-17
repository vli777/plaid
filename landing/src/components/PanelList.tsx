"use client";
import { useState, useLayoutEffect, useRef } from "react";
import { ServicePanel } from "@/types/services";
import PanelTitle from "./PanelTitle";
import PanelContent from "./PanelContent";

interface PanelListProps {
  panels: ServicePanel[];
}

export default function PanelList({ panels }: PanelListProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [titleHeight, setTitleHeight] = useState(0);

  useLayoutEffect(() => {
    if (titleRef.current) {
      setTitleHeight(titleRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div className="flex h-screen">
      <PanelTitle panel={panels[activeIndex]} titleRef={titleRef} />

      <div
        ref={scrollRef}
        className="flex-1 ml-0 md:ml-[360px] px-8 md:px-8 overflow-y-auto py-6"
      >
        {panels.map((panel, idx) => (
          <div key={panel.id} className="h-screen py-6 snap-start">
            <PanelContent
              panel={panel}
              index={idx}
              
              scrollRef={scrollRef}
              titleHeight={titleHeight}
              onInView={(i) => setActiveIndex(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
