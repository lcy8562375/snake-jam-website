import type { Metadata } from "next";
import StaticHtmlPage from "@/components/StaticHtmlPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Shenyang Time Acceleration Technology Co., Ltd."
};

export default function AboutPage() {
  return <StaticHtmlPage fileName="about.html" />;
}
