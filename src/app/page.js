import About from "./components/About";
import Activities from "./components/Activities";
import Eko from "./components/Eko";
import Header from "./components/Header";
import Promo from "./components/Promo";
import PromoSki from "./components/PromoSki";
import Restaurant from "./components/Restaurant";
import Showcase from "./components/Showcase";
import SkiInfo from "./components/SkiInfo";
import Travel from "./components/Travel";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Activities />
      <Travel />
      <Showcase />
      <Eko />
      <Promo />
      <Restaurant />
      <PromoSki />
      <SkiInfo />
      <Chatbot />
    </>
  );
}
