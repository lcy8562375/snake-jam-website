import type { Metadata } from "next";
import StaticHtmlPage from "@/components/StaticHtmlPage";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Official support page for Time Acceleration and Snake Jam."
};

export default function SupportPage() {
  return <StaticHtmlPage fileName="support.html" />;
}
