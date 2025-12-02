import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Lily's Diner – Lafayette, IN",
  description:
    "Learn about Lily's Diner – a family-owned Lafayette, IN diner serving comfort food since 1987. Three generations of warm hospitality and home-cooked meals.",
  openGraph: {
    title: "Our Story | Lily's Diner – Lafayette, IN",
    description:
      "Family-owned since 1987. Three generations serving homestyle comfort food in Lafayette, IN.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
