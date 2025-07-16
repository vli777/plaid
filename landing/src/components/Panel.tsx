"use client";

import parse from "html-react-parser";
import { ServicePanel } from "@/types/services";

export interface PanelProps {
  panel: ServicePanel;
}

export default function Panel({ panel }: PanelProps) {
  return (
    <div className="p-6 mb-6">
      <h2 className="text-3xl font-bold mb-2">{panel.title}</h2>
      {panel.subtitle && <p className="text-lg mb-4">{panel.subtitle}</p>}

      {panel.sections.map((section) => (
        <div key={section.id} className="mb-4">
          <h3 className="text-xl font-semibold mb-1">{section.title}</h3>
          <div className="prose text-base text-gray-500">
            {parse(section.content || "")}
          </div>
        </div>
      ))}
    </div>
  );
}
