import About from "./components/About";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Promo from "./components/Promo";
import PromoSki from "./components/PromoSki";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Activities />
      <Promo />
      <PromoSki />
      <Footer />
    </div>
  );
}
