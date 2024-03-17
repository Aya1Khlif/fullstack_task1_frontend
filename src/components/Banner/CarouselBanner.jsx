import Carousel from 'react-bootstrap/Carousel'; 
import Banner1 from '../../../public/banner-01.jpg';
import './CarouselBanner.css'
function CarouselBanner() {
    
  return (
    <Carousel className='carousel' data-bs-theme="dark">
    <Carousel.Item>
     <div className="img">
     <img
        className="d-block w-100"
        src={Banner1}
        alt="First slide"
      />
     </div>
      <Carousel.Caption>
     <div className="txt">
     <span >Melbourne, <em>Australia</em></span>
      <h1>Be Quick! Get the best villa in town</h1>
     </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Banner1}
        alt="Second slide"
      />
      <Carousel.Caption>
      <div className="txt">
      <span>Toronto, <em>Canada</em></span>
      <h1>Hurry! Get the Best Villa for you</h1>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Banner1}
        alt="Third slide"
      />
      <Carousel.Caption >
     <div className="txt">
     <span >Miami, <em>South Florida</em></span>
      <h1>Act Now!Get the highest level penthouse</h1>
     </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default CarouselBanner;