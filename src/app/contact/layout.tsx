import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location | Lily's Diner – Lafayette, IN",
  description:
    "Visit Lily's Diner at 3401 Fairfield Ct, Lafayette, IN 47909. Call (765) 474-2345 for takeout. Open daily for breakfast, lunch & dinner. Get directions & hours.",
  openGraph: {
    title: "Contact & Location | Lily's Diner – Lafayette, IN",
    description:
      "3401 Fairfield Ct, Lafayette, IN 47909. Call (765) 474-2345. Open daily for breakfast, lunch & dinner.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
