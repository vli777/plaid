import Header from "./Header";
import PanelList from "./PanelList";
import { HeaderProps } from "./Header";
import { ServicePanel } from "@/types/services";
import Image from "next/image";

export interface LandingPageProps {
  header: HeaderProps;
  panels: ServicePanel[];
}

export default function LandingPage({ header, panels }: LandingPageProps) {
  return (
    <div className="flex flex-col h-screen relative">
      <div className="fixed top-1/2 left-0 w-screen -translate-y-1/2 z-0 pointer-events-none">
        <Image
          src="/bg.svg"
          alt="Background Graphic"
          className="w-full h-full object-cover"
          width={1}
          height={1}
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col h-screen">
        <Header {...header} />
        <div className="flex-1 overflow-y-auto snap-y snap-mandatory">
          <PanelList panels={panels} />
        </div>
      </div>
    </div>
  );
}
