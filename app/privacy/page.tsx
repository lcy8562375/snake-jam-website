import type { Metadata } from "next";
import StaticHtmlPage from "@/components/StaticHtmlPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Shenyang Time Acceleration Technology Co., Ltd."
};

export default function PrivacyPage() {
  return <StaticHtmlPage fileName="privacy.html" />;
}
