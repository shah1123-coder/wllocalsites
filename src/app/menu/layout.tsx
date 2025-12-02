import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Lily's Diner – Lafayette, IN",
  description:
    "Browse Lily's Diner full menu featuring homestyle breakfast, lunch, dinner, desserts & drinks. Comfort food classics in Lafayette, IN. Vegetarian & gluten-free options available.",
  openGraph: {
    title: "Menu | Lily's Diner – Lafayette, IN",
    description:
      "Homestyle breakfast, lunch & dinner. Comfort food classics served with warm smiles in Lafayette, IN.",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
