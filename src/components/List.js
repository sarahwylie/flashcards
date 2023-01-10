// import { useState } from 'react';
import Flashcards from "./Flashcards";
import '../index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Grid2 from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Item';

const List = ({ queries }) => {

    // const [index, setIndex] = useState(0);

    // const slideRight = e => {
    //     e.preventDefault();
    //     if (index + 1 <= queries.length - 1) {
    //         setIndex(index + 1);
    //     }
    // };

    // const slideLeft = e => {
    //     e.preventDefault();
    //     if (index - 1 >= 0) {
    //         setIndex(index - 1);
    //     }
    // };

    // const handlePageChange = (page) => {
    //     let n = page - index;
    //     setIndex(index + n);
    // };

    return (
        <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid2 xs={12}>
                {/* <Col className='arrow-col'>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={slideLeft} size="5x" className='arrow' border />
                </Col> */}
                <Item className="card-container" 
                // sm={8}
                >
                    {queries.map(query => {
                        // let position = n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
                        return <Flashcards key={query.id} query={query} style={{ width: '100%' }} />
                    })}
                </Item>
                {/* <Col> */}
                    {/* <FontAwesomeIcon icon={faChevronLeft} onClick={slideLeft}/> */}
                    {/* <button onClick={slideLeft} className="leftBtn">
                        <FaChevronLeft color="pink" fontSize="3em" />
                    </button>
                    <button onClick={slideRight} className="rightBtn">
                        <FaChevronRight color="pink" fontSize="3em" />
                    </button> */}
                    {/* <FontAwesomeIcon icon={faChevronRight} onClick={slideRight} size="5x" className='arrow' border />
                </Col> */}
            </Grid2>
            {/* <Row>
                <Tracker queryLength={queries.length} activeIndex={index} handlePageChange={handlePageChange} />
            </Row> */}
        </Grid2>
    );
}

export default List;
