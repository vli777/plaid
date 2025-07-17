import { HeaderProps } from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import PanelList from "@/components/PanelList";

export default async function Home() {
  const base = process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  if (!base) throw new Error("Missing NEXT_PUBLIC_BASE_URL");

  const res = await fetch(`${base}/api/services`);
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  const data = await res.json();

   const headerData: HeaderProps = {
    title: 'Our services',
    cta: {
      label: "Let’s work together",
      href: '#contact',
    },
  }

    return <LandingPage header={headerData} panels={data} />
}
