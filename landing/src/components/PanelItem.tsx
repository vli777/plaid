import { ServicePanel } from "@/types/services";
import PanelTitle from "./PanelTitle";
import PanelContent from "./PanelContent";
import { RefObject } from "react";

export interface PanelItemProps {
  panel: ServicePanel;
  index: number;
  titleRef: RefObject<HTMLHeadingElement>;
  scrollRef: RefObject<HTMLDivElement>;
  titleHeight: number;
  onInView: (index: number) => void;
}

export default function PanelItem({
  panel,
  index,
  titleRef,
  scrollRef,
  titleHeight,
  onInView,
}: PanelItemProps) {
  return (
    <div
      className="snap-start h-full relative                
        max-w-[2560px] mx-auto
        px-4 md:px-8"
    >
      <PanelTitle panel={panel} titleRef={titleRef} />
      <PanelContent
        panel={panel}
        index={index}        
        scrollRef={scrollRef}
        titleHeight={titleHeight}
        onInView={onInView}
      />
    </div>
  );
}
