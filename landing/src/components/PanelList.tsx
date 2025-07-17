import { ServicePanel } from "@/types/services";
import PanelTitle from "./PanelTitle";
import PanelContent from "./PanelContent";

interface PanelListProps {
  panels: ServicePanel[];
}

export default function PanelList({ panels }: PanelListProps) {
  return (
    <div className="flex h-screen">
      <PanelTitle panel={panels[0]} />
      <div className="flex-1 ml-0 md:ml-[360px] px-8 md:px-8">
        {panels.map((panel) => (
          <div key={panel.id} className="h-screen">
            <PanelContent panel={panel} />
          </div>
        ))}
      </div>
    </div>
  );
}
