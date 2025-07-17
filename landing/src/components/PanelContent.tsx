import { ServicePanel, Section } from "@/types/services";
import PanelSection from "./PanelSection";
import { useRef, useEffect } from "react";
import { useInView, UseInViewOptions } from "framer-motion";

export interface PanelContentProps {
  panel: ServicePanel;
  index: number;
  onInView?: (index: number, inView: boolean) => void;
  centerY: number;
}

export default function PanelContent({
  panel,
  index,
  onInView,
  centerY,
}: PanelContentProps) {
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  let margin = "-50% 0px -50% 0px";
  if (centerY > 0 && typeof window !== "undefined") {
    const leeway = 32;
    const topMargin = -(centerY - leeway);
    const bottomMargin = -(window.innerHeight - centerY - leeway);
    margin = `${topMargin}px 0px ${bottomMargin}px 0px`;
  }

  const isInView = useInView(subtitleRef, {
    margin: margin as UseInViewOptions["margin"],
    amount: "some",
  });

  useEffect(() => {
    if (onInView) {
      onInView(index, isInView);
    }
  }, [isInView, index, onInView]);

  return (
    <div className="w-full md:w-[640px] md:ml-auto h-full flex flex-col overflow-y-auto divide-y divide-stone-200 my-2">
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
