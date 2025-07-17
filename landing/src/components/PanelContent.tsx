"use client";

import { ServicePanel, Section } from "@/types/services";
import PanelSection from "./PanelSection";
import { useRef, useEffect } from "react";
import { useInView, UseInViewOptions } from "framer-motion";

export interface PanelContentProps {
  panel: ServicePanel;
  index: number;
  // titleRef: React.RefObject<HTMLHeadingElement | null>;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  titleHeight: number;
  onInView?: (index: number) => void;
}

export default function PanelContent({
  panel,
  index,
  scrollRef,
  titleHeight,
  onInView,
}: PanelContentProps) {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const opts: UseInViewOptions = {
    root: scrollRef,
    margin: `-${titleHeight}px 0px 0px 0px` as UseInViewOptions["margin"],
    amount: 0,
  };

  const isInView = useInView(subtitleRef, opts);

  useEffect(() => {
    if (isInView) {
      onInView?.(index);
    }
  }, [isInView, index, onInView]);

  return (
    <div className="w-full md:w-[640px] md:ml-auto h-full flex flex-col divide-y divide-stone-200 pt-8">
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
