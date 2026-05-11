import type { Metadata } from "next";
import StaticHtmlPage from "@/components/StaticHtmlPage";

export const metadata: Metadata = {
  title: "Games",
  description:
    "Explore Snake Jam, the featured game from Shenyang Time Acceleration Technology Co., Ltd."
};

export default function GamesPage() {
  return <StaticHtmlPage fileName="games.html" />;
}
