import { useState } from 'react';
import Flashcards from "./Flashcards";
import '../index.css';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';

const List = ({ queries }) => {

    const [index, setIndex] = useState(0);

    const handleNext = (selectedIndex, e) => {
        e.preventDefault();
        setIndex(selectedIndex);
    };

    const handlePrev = (selectedIndex, e) => {
        e.preventDefault();
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div key={index}>
                {queries.map(query => {
                    return <div>
                        <div className="active carousel-item">
                            <Flashcards key={query.id} query={query} style={{ width: '100%' }} />
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" onSelect={handlePrev} data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" onSelect={handleNext} data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                })}
            </div>

        </div>
    );
}

export default List;
