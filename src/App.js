// import { useState } from 'react';
import List from './components/List';
import queries from './components/Queries'

const App = () => {
  // const [cards, setCards] = useState(QUERIES)
  return (
    <div>
      <List queries={queries}/>
      </div>
  );
}

export default App;
