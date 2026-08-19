import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCarousel = () => {


const heroImages = [

"/nepal df.png",
"/rolpa.png",
"/sir.png",
"/it.png",
"/agpi.png",
"/hen.png",
"/hybrid.png",
"/student-activities.jpg.jpeg",
"/no.png",
"/kyc.png"

];



const settings = {

dots:true,

infinite:true,

speed:1000,

slidesToShow:1,

slidesToScroll:1,

autoplay:true,

autoplaySpeed:4000,

arrows:true

};



return (

<section className="w-full h-[600px] overflow-hidden">


<Slider {...settings}>


{
heroImages.map((image,index)=>(


<div key={index} className="w-full h-[600px]">


<img

src={image}

alt={`Slide ${index+1}`}

className="
w-full
h-[600px]
object-cover
object-center
"

/>


</div>


))

}


</Slider>


</section>

);

};


export default HeroCarousel;