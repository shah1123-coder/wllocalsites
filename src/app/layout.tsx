import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lily's Diner – Comfort Food in Lafayette, IN",
  description:
    "Lily's Diner serves homestyle breakfast, lunch & dinner in Lafayette, IN. Family-run since 1987. Enjoy comfort food, friendly service & cozy atmosphere. Visit us today!",
  keywords: [
    "Lily's Diner",
    "Lafayette diner",
    "breakfast Lafayette IN",
    "comfort food",
    "family restaurant",
    "homestyle cooking",
  ],
  openGraph: {
    title: "Lily's Diner – Your Neighborhood Comfort-Food Spot in Lafayette",
    description:
      "Serving hearty breakfasts, delicious lunches & homestyle dinners. Family-run since 1987.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}