import type {Metadata} from "next";

import {roboto} from "@/lib/fonts";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bargiu Electro - Electrodomésticos y Tecnología",
    template: "%s | Bargiu Electro",
  },
  description:
    "Equipá tu hogar con lo mejor en tecnología y electrodomésticos. Precios increíbles y atención inmediata por WhatsApp. Heladeras, televisores, microondas y más.",
  keywords: [
    "electrodomésticos",
    "tecnología",
    "heladeras",
    "televisores",
    "microondas",
    "argentina",
    "bargiu electro",
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className={`bg-[#FFEEEE] text-black ${roboto.className}`}>
        <Header />
        {/* <HeaderMobile /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
