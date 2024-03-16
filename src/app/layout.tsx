import { Metadata } from "next";
import Head from "next/head";

import { Toaster } from "@/components/ui/toaster";
import ComponentWrapper from "@/layouts/ComponentWrapper";

import "@/styles/globals.css";

const title = "Form Builder";
const description =
  "Form Builder is a web application that helps you build forms in minutes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://form-builder-fe.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    images: [
      {
        url: "https://form-builder-fe.vercel.app/sharing.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title,
    description,
    images: [
      {
        url: "https://form-builder-fe.vercel.app/sharing.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <div>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
            rel="stylesheet"
          />
        </div>
      </Head>
      <body>
        <ComponentWrapper>{children}</ComponentWrapper>
        <Toaster />
      </body>
    </html>
  );
}
