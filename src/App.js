// import { useState } from "react";
import Flashcards from './components/Flashcards';
import queries from './components/Queries';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './index.css'
import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  // const [flip, setFlip] = useState(false);

  return (
    <Box sx={{ flexGrow: 2 }} className="container">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* <Grid xs={12} xl={3}> */}
        {/* <Item className="card-container"> */}
        {queries.map(query => {
          return <Grid item xs={2} sm={4} md={4}>
            <Item><Flashcards query={query} key={query.id}/></Item></Grid>
        })}
        {/* </Item> */}
        {/* </Grid> */}
      </Grid>
    </Box>
  );
}

export default App;
