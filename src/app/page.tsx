import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import Section from "./components/Section";
import Section1 from "./components/Section1";
import Specials from "./components/Specials";
import Contacts from "./contacts/Contacts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Section1 />
      <Specials />
      <Reservation />
      <Carousel />
      <Contacts />
      <About />
      <Footer />
      {/* <div>
        <h1>сайт на разработке...</h1>
        <a href="https://akbarsoft.uz">подробная информация</a>
      </div> */}
    </div>
  );
};