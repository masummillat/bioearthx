import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Helper function to get the correct base path for metadata
const getMetadataBasePath = () => {
  return process.env.NODE_ENV === "production" ? "/bioearthx" : "";
};

// Helper function to get full URL for metadata images
const getMetadataImageUrl = (imagePath: string) => {
  const basePath = getMetadataBasePath();
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://masummillat.github.io/bioearthx";

  // Remove leading slash from imagePath if it exists
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

  return `${baseUrl}${basePath}/${cleanPath}`;
};

export const metadata: Metadata = {
  title: "BioEarthX | Sustainable Sodium Silicate Solutions",
  description:
    "BioEarthX pioneers eco-friendly sodium silicate for industries. High-performance, 100% sustainable chemistry for adhesives, detergents & construction.",
  icons: [
    `${getMetadataBasePath()}/favicon.ico`,
    `${getMetadataBasePath()}/apple-touch-icon.png`,
    `${getMetadataBasePath()}/favicon-16x16.png`,
    `${getMetadataBasePath()}/favicon-32x32.png`,
    `${getMetadataBasePath()}/web-app-manifest-192x192.png`,
    `${getMetadataBasePath()}/web-app-manifest-512x512.png`,
  ],
  authors: [
    {
      name: "BioEarthX",
      url: new URL(
        process.env.NEXT_PUBLIC_BASE_URL ||
          "https://masummillat.github.io/bioearthx"
      ),
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
    process.env.NEXT_PUBLIC_BASE_URL ||
      "https://masummillat.github.io/bioearthx"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: new URL(
      process.env.NEXT_PUBLIC_BASE_URL ||
        "https://masummillat.github.io/bioearthx"
    ),
    title: "BioEarthX | Sustainable Sodium Silicate Solutions",
    description:
      "BioEarthX pioneers eco-friendly sodium silicate for industries. High-performance, 100% sustainable chemistry for adhesives, detergents & construction.",
    countryName: "Bangladesh",
    siteName: "BioEarthX",
    phoneNumbers: "+8801742699424",
    images: [
      {
        url: getMetadataImageUrl("images/cover.jpg"),
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
        url: getMetadataImageUrl("images/cover.jpg"),
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
};

const inter = Inter({
  subsets: ["latin", "latin-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`${inter.className}  antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
