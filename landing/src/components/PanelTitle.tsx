import { ServicePanel } from "@/types/services";
import { forwardRef } from "react";

export interface PanelTitleProps {
  panel: ServicePanel;
  titleRef?: React.RefObject<HTMLHeadingElement | null>;
}

const PanelTitle = forwardRef<HTMLHeadingElement, PanelTitleProps>(
  ({ panel, titleRef }, ref) => {
    return (
      <div
        className="
          fixed
          top-16 left-0
          h-[calc(100vh-6rem)]
          z-10
          w-[360px]
          flex flex-col justify-between
          px-8 py-6
        "
      >
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl tracking-tight leading-[0.8] font-extrabold uppercase"
        >
          {panel.title}
        </h1>

        <div className="text-[5rem] md:text-[7rem] font-bold leading-none tracking-tighter">
          {panel.order < 10 ? `0${panel.order}` : panel.order}
        </div>
      </div>
    );
  }
);

PanelTitle.displayName = "PanelTitle";

export default PanelTitle;
