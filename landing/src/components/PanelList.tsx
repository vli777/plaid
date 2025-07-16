import { ServicePanel } from "@/types/services";
import PanelItem from "./PanelItem";

interface PanelListProps {
  panels: ServicePanel[];
}

export default function PanelList({ panels }: PanelListProps) {
  return (
    <div>
      {panels.map((panel) => (
        <PanelItem key={panel.id} panel={panel} />
      ))}
    </div>
  );
}
