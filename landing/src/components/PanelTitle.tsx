import { ServicePanel } from "@/types/services";
import { forwardRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export interface PanelTitleProps {
  panel: ServicePanel;
  titleRef?: React.RefObject<HTMLHeadingElement | null>;
}

export default function PanelTitle({ panel, titleRef }: PanelTitleProps) {
  return (
    <div
      className="fixed top-16 left-0 h-[calc(100vh-6rem)] z-10 w-[360px] flex flex-col justify-between px-8 py-6"
    >
      {/* Title with in-place animation */}
      <div
        ref={titleRef}
        className="mb-4 relative"
        style={{ height: '112px' }} // Adjusted to match original 6xl/8xl title font size
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.h1
            key={panel.title}
            initial={{ y: 40, opacity: 0, position: 'absolute', left: 0, width: '100%' }}
            animate={{ y: 0, opacity: 1, position: 'absolute', left: 0, width: '100%' }}
            exit={{ y: -40, opacity: 0, position: 'absolute', left: 0, width: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="text-6xl md:text-8xl tracking-tight leading-[0.8] font-extrabold uppercase w-full left-0 top-0 absolute text-left"
            style={{ margin: 0 }}
          >
            {panel.title}
          </motion.h1>
        </AnimatePresence>
      </div>
      {/* Order with in-place animation */}
      <div
        className="relative"
        style={{ height: '112px' }} // Adjusted to match original 5rem/7rem order font size
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={panel.order}
            initial={{ y: 40, opacity: 0, position: 'absolute', left: 0, width: '100%' }}
            animate={{ y: 0, opacity: 1, position: 'absolute', left: 0, width: '100%' }}
            exit={{ y: -40, opacity: 0, position: 'absolute', left: 0, width: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="text-[5rem] md:text-[7rem] font-bold leading-none tracking-tighter w-full left-0 top-0 absolute text-left"
            style={{ margin: 0 }}
          >
            {panel.order < 10 ? `0${panel.order}` : panel.order}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
