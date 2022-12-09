import Flashcards from './components/Flashcards';
import queries from './components/Queries';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css'

const App = () => {

  return (
    <Container>
      <Row>
      <Col className="card-container" sm={8}>
      {queries.map(query => {
            return <Flashcards key={query.id} query={query} />
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
