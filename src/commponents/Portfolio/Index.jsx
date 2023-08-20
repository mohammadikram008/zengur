import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Index.css'
const Index = ({ items }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000

    };
    return (
        <div>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className="slider-item">
                        <img src={item.imageUrl} alt={`Project ${index}`} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Index
