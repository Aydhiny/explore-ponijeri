import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ProgressBar";
import CreatedBy from "./components/CreatedBy";
import SmoothScroll from "./components/SmoothScroll";
import Snowflakes from "./components/Snowflakes";

export const metadata = {
  title: "Explore Ponijeri | Planinsko Izletište Kakanj",
  description:
    "Otkrijte Ponijere — zimski dragulj Bosne. Skijanje, planinarenje, restorani i smještaj na 1200m nadmorske visine.",
  keywords: "Ponijeri, Kakanj, skijanje, planinsko izletište, Bosna, zimski turizam",
  openGraph: {
    title: "Explore Ponijeri",
    description: "Planinsko izletište Ponijeri — Kakanj, Bosna i Hercegovina",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bs" className="scroll-smooth">
      <body className="antialiased">
        <SmoothScroll>
          <Snowflakes />
          <ScrollProgressBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CreatedBy />
        </SmoothScroll>
      </body>
    </html>
  );
}
