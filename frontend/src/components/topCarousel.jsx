import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/home.css";
import { Carousel } from 'react-responsive-carousel';
import pic1 from "../images/carousel-1.jpg";
import pic2 from "../images/carousel-2.jpg";
import pic3 from "../images/carousel-3.jpg";
import pic4 from "../images/carousel-4.jpg";
import pic5 from "../images/carousel-5.jpg";

const carouselImages = [
  {id: 1, pic: pic1},
  {id: 2, pic: pic2},
  {id: 3, pic: pic3},
  {id: 4, pic: pic4},
  {id: 5, pic: pic5},
]


export const TopCarousel = ()=>{
  return(
      <div id="top-carousel">
        <h1>We make best food. Deliver to thousand of home successfully.</h1>
          <Carousel autoPlay={true} showThumbs={false} interval={4000} infiniteLoop={true} emulateTouch={true} transitionTime={1500}   >
          {
            carouselImages.map(el=><div key={el.id}>
              <img src={el.pic} alt={el.id} />
            </div>)
          }
          </Carousel>
      </div>
  )
}