"use client";

import { ServicePanel, Section } from "@/types/services";
import PanelSection from "./PanelSection";
import { useRef, useEffect } from "react";
import { useInView, UseInViewOptions } from "framer-motion";

export interface PanelContentProps {
  panel: ServicePanel;
  index: number;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  titleHeight: number;
  scrollDirection: 'up' | 'down';
  onCross: (index: number, direction: 'up' | 'down') => void;
}

export default function PanelContent({
  panel,
  index,
  scrollRef,
  titleHeight,
  scrollDirection,
  onCross,
}: PanelContentProps) {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  const opts: UseInViewOptions = {
    root: scrollRef,
    margin: `-${titleHeight}px 0px 0px 0px` as UseInViewOptions["margin"],
    amount: 0.5,
  };

  const isInView = useInView(subtitleRef, opts);

  // Track previous inView state to detect crossing
  const prevInView = useRef(isInView);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      if (prevInView.current !== isInView) {
        // Only fire on the correct crossing event
        if (isInView && scrollDirection === 'down') {
          onCross(index, 'down');
        } else if (!isInView && scrollDirection === 'up') {
          onCross(index, 'up');
        }
        prevInView.current = isInView;
      }
    }
  }, [isInView, index, onCross, scrollDirection]);

  return (
    <div className="w-full md:w-[640px] md:ml-auto h-full flex flex-col divide-y divide-stone-200 pt-8">    
      <div className="block md:hidden mb-4">
        <div className="flex items-end justify-between">
          <h1 className="text-4xl font-extrabold uppercase">
            {panel.title}
          </h1>
          <span className="text-5xl font-bold leading-none tracking-tighter">
            {panel.order < 10 ? `0${panel.order}` : panel.order}
          </span>
        </div>
      </div>
      {panel.subtitle && (
        <p className="pb-4 text-md font-bold text-stone-600" ref={subtitleRef}>
          {panel.subtitle}
        </p>
      )}
      {panel.sections.map((section: Section) => (
        <PanelSection key={section.id} {...section} />
      ))}
    </div>
  );
}
