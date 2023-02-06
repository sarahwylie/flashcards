// import { useState } from "react";
import Flashcards from './components/Flashcards';
import { cQueries, compSciQueries, pythonQueries, reactQueries, springQueries, terraformQueries } from './components/Queries/';
import './index.css'
import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
// const [categories] = useState([
//   {name: "Computer Science"},
//   {name: "React"},

// ])

  return (
    <Box sx={{ flexGrow: 2, width : '100%' }}>
<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="C#" {...a11yProps(0)} />
    <Tab label="Computer Science" {...a11yProps(1)} />
    <Tab label="Python" {...a11yProps(2)} />
  </Tabs>
</Box>
<TabPanel value={cQueries} index={0}>
  C#
</TabPanel>
<TabPanel value={compSciQueries} index={1}>
  Computer Science
</TabPanel>
<TabPanel value={pythonQueries} index={2}>
  Python
</TabPanel>
<TabPanel value={reactQueries} index={3}>
  React
</TabPanel>
<TabPanel value={springQueries} index={4}>
  Spring
</TabPanel>
<TabPanel value={terraformQueries} index={5}>
  Terraform
</TabPanel>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {queries.map(query => {
          return <Grid item xs={2} sm={4} md={4}>
            <Item><Flashcards query={query} key={query.id}/></Item></Grid>
        })}

      </Grid>
    </Box>
  );
}

export default App;
