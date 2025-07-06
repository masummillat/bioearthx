import LandingPage from "@/modules/home";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "BioEarthX | Sustainable Sodium Silicate Solutions",
  description:
    "BioEarthX pioneers eco-friendly sodium silicate for industries. High-performance, 100% sustainable chemistry for adhesives, detergents & construction.",
  icons: [
    "/favicon.ico",
    "/apple-touch-icon.png",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/web-app-manifest-192x192.png",
    "/web-app-manifest-512x512.png",
  ],
  authors: [
    {
      name: "BioEarthX",
      url: "https://bioearthx.com",
    },
  ],
  keywords: [
    "BioEarthX",
    "Sustainable sodium silicate ",
    "Sodium Silicate",
    "Sodium Silicate Solutions",
    "Eco-friendly water glass",
    "Green industrial chemicals",
    "Carbon-neutral adhesives",
    "Bangladesh chemical manufacturing",
  ],
  applicationName: "BioEarthX",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://bioearthx.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bioearthx.com",
    title: "BioEarthX | Sustainable Sodium Silicate Solutions",
    description:
      "BioEarthX pioneers eco-friendly sodium silicate for industries. High-performance, 100% sustainable chemistry for adhesives, detergents & construction.",
    countryName: "Bangladesh",
    siteName: "BioEarthX",
    phoneNumbers: "+8801742699424",

    images: [
      {
        url: "/images/cover.png",
        alt: "BioEarthX",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    site: "@bioearthx",
    title: "BioEarthX | Sustainable Sodium Silicate Solutions",
    description:
      "BioEarthX pioneers eco-friendly sodium silicate for industries. High-performance, 100% sustainable chemistry for adhesives, detergents & construction.",
    card: "summary_large_image",
    images: [
      {
        url: "/images/cover.png",
        alt: "BioEarthX",
        width: 1200,
        height: 630,
      },
    ],
    creator: "@bioearthx",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#4C744A",
  colorScheme: "dark",
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};
export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}
