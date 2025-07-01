import type { Metadata } from "next";
import "./globals.css";


export const metadata = {
  title: "Quote Generator | Nexium",
  description: "Best quotes fetched from JSON and TS arrays",
  icons: {
    icon: "/favicon.ico",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
