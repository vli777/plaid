import { ServicePanel, Section } from "@/types/services";
import PanelSection from "./PanelSection";

export interface PanelItemProps {
  panel: ServicePanel;
}

export default function PanelItem({ panel }: PanelItemProps) {
  return (
    <div className="mb-12">
      {/* TO-DO: title should be extracted to left column in 2 col layout */}
      <h2 className="text-3xl font-extrabold uppercase">{panel.title}</h2>
      {panel.subtitle && (
        <p className="mb-6 font-bold text-stone-600">{panel.subtitle}</p>
      )}

      <div className="divide-y divide-stone-200">
        {panel.sections.map((section: Section) => (
          <PanelSection key={section.id} {...section} />
        ))}
      </div>
    </div>
  );
}
