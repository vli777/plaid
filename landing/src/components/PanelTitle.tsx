import { ServicePanel } from "@/types/services";

export interface PanelTitleProps {
  panel: ServicePanel;
}

export default function PanelTitle({ panel }: PanelTitleProps) {
  return (
    <div
      className="fixed inset-y-16 left-0 w-[360px] flex flex-col justify-between px-8 py-6
      "
    >
      <h1 className="text-6xl md:text-8xl tracking-tight leading-[0.8] font-extrabold uppercase">
        {panel.title}
      </h1>

      <div className="text-[5rem] md:text-[7rem] font-bold leading-none tracking-tighter text-stone-200">
        {panel.order < 10 ? `0${panel.order}` : panel.order}
      </div>
    </div>
  );
}
