import React from "react";
import './Slider1.css'
import ProductCard  from '../Product/ProductCard';
import Slider from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ProductNewCard from "../ProductNewCard/ProductNewCard";
const Slider2=()=>{
    const CustomPrevArrow = (props) => (
        <div className="custom-arrow custom-prev" onClick={props.onClick}>
            <FontAwesomeIcon icon={faPlay} />
            {/* &lt; */}
        </div>
    );

    const CustomNextArrow = (props) => (
        <div className="custom-arrow custom-next" onClick={props.onClick}>
            {/* Your custom right arrow icon or content */}
            {/* &gt; */}
            <FontAwesomeIcon icon={faPlay}/>
        </div>
    );
    var settings = {
        
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                className: "center",
                breakpoint: 1290,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: false
                }
                },
            {
            className: "center",
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: false,
                dots: false
            }
            },
            {
                className: "center",
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
                },
            {
            className: "center",
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: false

            }
            },
            {
            className: "center",
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
            }
        ],
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
        };


    return(
        <div className="slider-container container">
        <Slider {...settings}>
                <ProductNewCard IsInHome = {true}/>
                <ProductNewCard IsInHome = {true}/>
                <ProductNewCard IsInHome = {true}/>
                <ProductNewCard IsInHome = {true}/>
                <ProductNewCard IsInHome = {true}/>
                <ProductNewCard IsInHome = {true}/>
                
        </Slider>
        </div>
        
        
    );

}
export default Slider2;