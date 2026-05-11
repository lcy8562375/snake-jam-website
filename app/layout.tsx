import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.timeaccel.com"),
  title: {
    default: "Shenyang Time Acceleration Technology Co., Ltd.",
    template: "%s | Time Acceleration"
  },
  description:
    "Shenyang Time Acceleration Technology Co., Ltd. creates professional mobile game experiences including Snake Jam.",
  openGraph: {
    title: "Shenyang Time Acceleration Technology Co., Ltd.",
    description:
      "Professional mobile game development studio creating polished, approachable mobile experiences.",
    url: "https://www.timeaccel.com",
    siteName: "Time Acceleration",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="light" lang="en">
      <body
        className={`${manrope.variable} ${plusJakartaSans.variable} bg-surface text-on-surface font-body antialiased selection:bg-primary-container selection:text-on-primary-container`}
      >
        {children}
      </body>
    </html>
  );
}
