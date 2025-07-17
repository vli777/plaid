import { ServicePanel } from "@/types/services";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface PanelTitleProps {
  panel: ServicePanel;
  titleRef?: React.RefObject<HTMLHeadingElement | null>;
}

export default function PanelTitle({ panel, titleRef }: PanelTitleProps) {
  return (
    <div
      className="fixed top-16 left-0 h-[calc(100vh-6rem)] z-10 w-[360px] flex flex-col justify-between px-8 py-6"
    >
      <div
        ref={titleRef}
        className="mb-4 relative"
        style={{ height: '112px' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.h1
            key={panel.title}
            initial={{ y: 40, opacity: 0, position: 'absolute', left: 0, width: '100%' }}
            animate={{ y: 0, opacity: 1, position: 'absolute', left: 0, width: '100%' }}
            exit={{ y: -40, opacity: 0, position: 'absolute', left: 0, width: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="text-6xl md:text-8xl tracking-tight leading-[0.8] font-extrabold uppercase w-full left-0 top-0 absolute text-left"
            style={{ margin: 0, zIndex: 2, overflow: 'hidden' }}
          >
            {panel.title}
          </motion.h1>
        </AnimatePresence>
      </div>
      <div className="relative w-full" style={{ height: '80px' }}>
        <Image
          src="/bg.svg"
          alt="Background Graphic"
          className="pointer-events-none select-none panel-title-bg-svg"
          width={1920}
          height={80}
          priority
          style={{
            width: '100%',
            height: '100%',
            zIndex: 0,
            opacity: 0.8,
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <AnimatePresence>
          <motion.div
            key={panel.title + '-bg-shimmer'}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              background: 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
              mixBlendMode: 'lighten',
              zIndex: 1,
            }}
          />
        </AnimatePresence>
        <style>{`
          @media (min-width: 768px) {
            .panel-title-bg-svg {
              width: 100% !important;
              left: 0 !important;
            }
          }
        `}</style>
      </div>
      
      <div
        className="relative"
        style={{ height: '112px' }} 
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
