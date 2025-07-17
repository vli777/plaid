"use client";

import {
  useState,
  useLayoutEffect,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { ServicePanel } from "@/types/services";
import PanelTitle from "./PanelTitle";
import PanelContent from "./PanelContent";

interface PanelListProps {
  panels: ServicePanel[];
}

export default function PanelList({ panels }: PanelListProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [titleHeight, setTitleHeight] = useState(0);
  const [, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (titleRef.current) {
      setTitleHeight(titleRef.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    let lastY = scrollEl.scrollTop;
    const onScroll = () => {
      const y = scrollEl.scrollTop;
      setScrollDirection(y > lastY ? "down" : "up");
      setScrollY(y);
      lastY = y;
    };
    scrollEl.addEventListener("scroll", onScroll);
    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const panelNode = panelRefs.current[activeIndex];
      if (panelNode) {
        panelNode.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [activeIndex]);

  const handleCross = useCallback((idx: number, direction: "up" | "down") => {
    if (direction === "down") {
      setActiveIndex(idx);
    } else if (direction === "up" && idx > 0) {
      setActiveIndex(idx - 1);
    }
  }, []);

  return (
    <div className="grid h-screen relative grid-cols-1 md:grid-cols-[360px_1fr]">
      <div className="relative z-10 hidden md:block col-span-1">
        <PanelTitle panel={panels[activeIndex]} titleRef={titleRef} />
      </div>
      <div
        ref={scrollRef}
        className="relative z-10 col-span-1 overflow-y-auto scroll-pt-24"
      >
        {panels.map((panel, idx) => (
          <div
            key={panel.id}
            className="h-screen snap-start"
            ref={(el) => {
              panelRefs.current[idx] = el;
            }}
          >
            <PanelContent
              panel={panel}
              index={idx}
              scrollRef={scrollRef}
              titleHeight={titleHeight}
              scrollDirection={scrollDirection}
              onCross={handleCross}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
