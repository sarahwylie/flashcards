import { useState } from 'react';
import Flashcards from "./Flashcards";
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
// import Tracker from './Tracker';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const List = ({ queries }) => {

    const [index, setIndex] = useState(0);

    const slideRight = e => {
        e.preventDefault();
        if (index + 1 <= queries.length - 1) {
            setIndex(index + 1);
        }
    };

    const slideLeft = e => {
        e.preventDefault();
        if (index - 1 >= 0) {
            setIndex(index - 1);
        }
    };

    // const handlePageChange = (page) => {
    //     let n = page - index;
    //     setIndex(index + n);
    // };

    return (
        <div>
            <Row>
                <Col className='arrow-col'>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={slideLeft} size="5x" className='arrow' border />
                </Col>
                <Col key={index} className="card-container" sm={8}>
                    {queries.map((query, n) => {
                        let position = n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
                        return <Flashcards key={query.id} query={query} cardStyle={position} style={{ width: '100%' }} />
                    })}
                </Col>
                <Col>
                    {/* <FontAwesomeIcon icon={faChevronLeft} onClick={slideLeft}/> */}
                    {/* <button onClick={slideLeft} className="leftBtn">
                        <FaChevronLeft color="pink" fontSize="3em" />
                    </button>
                    <button onClick={slideRight} className="rightBtn">
                        <FaChevronRight color="pink" fontSize="3em" />
                    </button> */}
                    <FontAwesomeIcon icon={faChevronRight} onClick={slideRight} size="5x" className='arrow' border />
                </Col>
            </Row>
            {/* <Row>
                <Tracker queryLength={queries.length} activeIndex={index} handlePageChange={handlePageChange} />
            </Row> */}
        </div>
    );
}

export default List;
