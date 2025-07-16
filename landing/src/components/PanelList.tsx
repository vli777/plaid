import { ServicePanel } from "@/types/services";
import Panel from "./Panel";

interface PanelListProps {
  panels: ServicePanel[];
}

export default function PanelList({ panels }: PanelListProps) {
  return (
    <div>
      {panels.map((panel) => (
        <Panel key={panel.id} panel={panel} />
      ))}
    </div>
  );
}
