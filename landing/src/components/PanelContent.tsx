import { ServicePanel, Section } from "@/types/services";
import PanelSection from "./PanelSection";

export interface PanelContentProps {
  panel: ServicePanel;
}

export default function PanelContent({ panel }: PanelContentProps) {
  return (
    <div className="w-full md:w-[640px] md:ml-auto h-full flex flex-col overflow-y-auto divide-y divide-stone-200 my-2">
      {panel.subtitle && (
        <p className="pb-4 text-md font-bold text-stone-600">
          {panel.subtitle}
        </p>
      )}
      {panel.sections.map((section: Section) => (
        <PanelSection key={section.id} {...section} />
      ))}
    </div>
  );
}
