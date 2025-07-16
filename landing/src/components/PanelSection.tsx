"use client";

import { useState } from "react";
import parse from "html-react-parser";
import { Section } from "@/types/services";

export default function PanelSection({
  title,
  content,
  defaultExpanded = false,
}: Section) {
  const [open, setOpen] = useState(defaultExpanded);

  return (
    <div className="border-stone-200 last:border-b last:border-stone-200 py-6">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        <span className="font-bold text-stone-600">{title}</span>
        <span className="ml-4 text-2xl text-stone-600">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="pt-4 pb-4">
          <div className="w-[60%] text-sm font-medium prose prose-sm text-stone-400">
            {parse(content || "")}
          </div>
        </div>
      )}
    </div>
  );
}
