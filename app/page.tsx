import type { Metadata } from "next";
import { LandingHome } from "@/components/landing/LandingHome";

export const metadata: Metadata = {
  title: "Save The Date | Premium AI Digital Wedding Invitations & Websites",
  description:
    "Create breathtaking, bespoke digital wedding invitations and interactive suites. Explore live designs for Aswanth & Geethanjali (Ashwageetham), Prudhvi & Mouktika, and Yaswanth & Mrudula.",
  openGraph: {
    title: "Save The Date | Premium AI Digital Wedding Invitations",
    description:
      "Interactive 3D wax seal envelopes, temple gopuram reveals, scratch-to-reveal cards, and instant RSVP tracking. Explore our flagship wedding invitations.",
    images: [
      {
        url: "/ashwageetham/theme_card.jpg",
        width: 1200,
        height: 630,
        alt: "Save The Date Wedding Invitations",
      },
    ],
  },
};

export default function Home() {
  return <LandingHome />;
}
