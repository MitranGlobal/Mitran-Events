import type { Metadata, Viewport } from "next";
import "@fontsource/young-serif/400.css";
import "@fontsource-variable/figtree";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";
import "./globals.css";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  openGraph: { title: site.metaTitle, description: site.metaDescription, type: "website", siteName: "MiTran Global" },
  twitter: { card: "summary_large_image", title: site.metaTitle, description: site.metaDescription },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
