import Link from "next/link";
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

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Travel />
      <Activities />
      <Showcase />
      <Eko />
      <div className="bg-white xl:items-start xl:justify-start justify-center flex items-center px-24 pb-12">
        <Link
          href="/restaurants"
          className="text-white border-b-2 xl:mr-8 mx-0 hover:bg-black hover:text-white transition-all duration-150 border-white rounded-sm font-bold px-8 py-3 bg-blue-500 backdrop-blur-sm"
        >
          Više informacija
        </Link>
      </div>
      <Promo />
      <Restaurant />
      <div className="xl:pr-16 px-4 pb-12 justify-end bg-white items-end flex">
        <Link
          href="/restaurants"
          className="text-white border-b-2 xl:mr-8 mx-auto hover:bg-black hover:text-white transition-all duration-150 border-white rounded-sm font-bold px-8 py-3 bg-blue-500 backdrop-blur-sm self-start"
        >
          Više informacija
        </Link>
      </div>
      <PromoSki />
      <SkiInfo />
    </div>
  );
}
