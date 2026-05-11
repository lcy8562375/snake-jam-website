import type { Metadata } from "next";
import StaticHtmlPage from "@/components/StaticHtmlPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Shenyang Time Acceleration Technology Co., Ltd."
};

export default function TermsPage() {
  return <StaticHtmlPage fileName="terms.html" />;
}
