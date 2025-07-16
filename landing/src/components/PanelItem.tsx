import { ServicePanel, Section } from "@/types/services";
import PanelSection from "./PanelSection";

export interface PanelItemProps {
  panel: ServicePanel;
}

export default function PanelItem({ panel }: PanelItemProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
      <div className="md:col-span-4 flex flex-col justify-between">
        <h1 className="text-6xl md:text-8xl  tracking-tight leading-[0.8] font-extrabold uppercase ">
          {panel.title}
        </h1>

        <div className="text-[5rem] md:text-[7rem] font-bold leading-none tracking-tighter">
          {String(panel.order).padStart(2, "0")}
        </div>
      </div>

      <div className="md:col-span-8 divide-y divide-stone-200">
        {panel.subtitle && (
          <p className="pb-4 text-md font-bold  text-stone-600">
            {panel.subtitle}
          </p>
        )}
        {panel.sections.map((section: Section) => (
          <PanelSection key={section.id} {...section} />
        ))}
      </div>
    </div>
  );
}
