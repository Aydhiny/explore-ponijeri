import About from "./components/About";
import Activities from "./components/Activities";
import Eko from "./components/Eko";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Promo from "./components/Promo";
import PromoSki from "./components/PromoSki";
import Restaurant from "./components/Restaurant";
import Travel from "./components/Travel";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Travel />
      <Activities />
      <Promo />
      <Eko />
      <PromoSki />
      <Restaurant />
      <Footer />
    </div>
  );
}
