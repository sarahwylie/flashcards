import { useState } from 'react';
import Flashcards from "./Flashcards";
import '../index.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const List = ({ queries }) => {

    const [sliderRef, setSliderRef] = useState(null)

    const settings = {
        arrows: false,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: false,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
    };

    return (
        <div>
            <button onCLick={sliderRef?.slickPrev}>
                <FaChevronLeft color="pink" fontSize="3em"/>
            </button>
            <button onCLick={sliderRef?.slickNext}>
                <FaChevronRight color="pink" fontSize="3em"/>
            </button>
            <Slider ref={setSliderRef} {...settings}>
                {queries.map(query => {
                    return <Flashcards key={query.id} query={query} />
                })}
            </Slider>
        </div>
    );
}

export default List;
