import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { NavBar } from "./components/Navigation/Nav";
import "./App.css";
import CarouselBanner from "./components/Banner/CarouselBanner";
import Featured from "./components/FEATURED/Featured";
import Video from "./components/videoView/Video";
import BestDeal from "./components/BESTDEAL/BestDeal";
import Properties from "./components/PROPERTIES/Properties";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";


function App() {
  return (
    <>
      <NavBar />
      <CarouselBanner />
      <Featured />
      <Video />
      <BestDeal />
      <Properties />
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
