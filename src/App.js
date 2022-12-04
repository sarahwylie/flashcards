import { useState } from 'react';
import Flashcards from './components/Flashcards';
import queries from './components/Queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {

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
    <Container className="container">
      <Row>
        <Col className='arrow-col'>
          <FontAwesomeIcon icon={faChevronLeft} onClick={slideLeft} size="5x" className='arrow' border fixedWidth />
        </Col>
        <Col key={index} className="card-container" sm={8}>
          {queries.map((query, n) => {
            let position = n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
            return <Flashcards key={query.id} query={query} cardStyle={position} style={{ width: '100%' }} />
          })}
        </Col>
        <Col>
          <FontAwesomeIcon icon={faChevronRight} onClick={slideRight} size="5x" className='arrow' border />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
