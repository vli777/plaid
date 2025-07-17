import { ServicePanel } from "@/types/services";
import PanelTitle from "./PanelTitle";
import PanelContent from "./PanelContent";

export interface PanelItemProps {
  panel: ServicePanel;
}

export default function PanelItem({ panel }: PanelItemProps) {
  return (
    <div className="snap-start h-screen max-w-[2560px] mx-auto px-4 md:px-8">
      <div className="h-full flex flex-col md:flex-row gap-8">
        <PanelTitle panel={panel} />
        <PanelContent panel={panel} />
      </div>
    </div>
  );
}
