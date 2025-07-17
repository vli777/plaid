import Header from "./Header";
import PanelList from "./PanelList";
import { HeaderProps } from "./Header";
import { ServicePanel } from "@/types/services";

export interface LandingPageProps {
  header: HeaderProps;
  panels: ServicePanel[];
}

export default function LandingPage({ header, panels }: LandingPageProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header {...header} />
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <PanelList panels={panels} />
      </div>
    </div>
  );
}
