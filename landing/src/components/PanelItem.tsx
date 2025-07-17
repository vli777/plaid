import { ServicePanel, Section } from "@/types/services";
import PanelSection from "./PanelSection";

export interface PanelItemProps {
  panel: ServicePanel;
}

export default function PanelItem({ panel }: PanelItemProps) {
  return (
    <div className="snap-start h-screen max-w-[2560px] mx-auto px-4 md:px-8">
      <div className="h-full flex flex-col md:flex-row gap-8">
        
        <div className="w-full md:w-[360px] flex flex-col justify-between h-full">
          <h1 className="text-6xl md:text-8xl tracking-tight leading-[0.8] font-extrabold uppercase">
            {panel.title}
          </h1>

          <div className="text-[5rem] md:text-[7rem] font-bold leading-none tracking-tighter text-stone-200">
            {panel.order < 10 ? `0${panel.order}` : panel.order}
          </div>
        </div>

        <div className="w-full md:w-[640px] md:ml-auto overflow-auto divide-y divide-stone-200">
          {panel.subtitle && (
            <p className="pb-4 text-md font-bold text-stone-600">
              {panel.subtitle}
            </p>
          )}
          {panel.sections.map((section: Section) => (
            <PanelSection key={section.id} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}
