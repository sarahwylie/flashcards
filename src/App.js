import Flashcards from './components/Flashcards';
import queries from './components/Queries';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './index.css'

const App = () => {

  return (
    // <Container>
    //   <Row>
      <div className="card-container">
      {queries.map(query => {
            return <Flashcards key={query.id} query={query} />
          })}
        </div>
    //   </Row>
    // </Container>
  );
}

export default App;
