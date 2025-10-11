import Chefs from "./components/Chefs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import Section from "./components/Section";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Specials from "./components/Specials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Menu />
      <Specials />
      <Section4 />
      <Chefs />
      <Reservation />
      <Section5 />
      <Footer />
    </div>
  );
};