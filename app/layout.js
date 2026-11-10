import { Cormorant_Garamond, Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import ScrollTop from "@/components/ScrollTop";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--f-serif",
});
const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--f-sans",
});

export const metadata = {
  title: "GOTOEGYPT : Découvrez l'Égypte",
  description: "Voyages et récits au coeur de l'Égypte ancienne.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${serif.variable} ${sans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
