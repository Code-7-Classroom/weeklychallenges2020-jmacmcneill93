import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const photos = [
    {
        name: "Photo 1",
        url: "/images/newshoes6.jpeg",
        alt: "Nike Shoes"
    },
    {
        name: "Photo 2",
        url: "/images/newshoes5.jpeg",
        alt: "Nike AirMax Shoes"
    },
    {
        name: "Photo 3",
        url: "/images/newshoes3.jpeg",
        alt: "Nike Off-White Shoes"
    },
    {
        name: "Photo 4",
        url: "/images/newshoes4.jpeg",
        alt: "Nike Air Jordan Retros Shoe"
    },
    {
        name: "Photo 5",
        url: "/images/shoes_5.jpg",
        alt: "Shoe Wall"
    }
]
class Carousel extends React.Component {
    render() {
        const settings = {
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides"
           }
    return (
        <div className="carousel-slide">
        <Slider {...settings}>
            {photos.map((photo) => {
                return(
                    <div>
                        <img width="100%" src={photo.url}/>
                    </div>
                )
            })}

        </Slider>
        </div>
          )
        }
}
export default Carousel;