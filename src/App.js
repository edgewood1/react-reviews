import { Route, Routes, Navigate } from 'react-router-dom';
import ButtonAppBar from './Components/NavBar';
import Container from '@mui/material/Container';
// pages
import Details from './Pages/Details';
import List from './Pages/List';
import useMediaQuery from "./hooks/useMediaQuery";

const App = ()  => {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (
    <div style={{height: '100vh', background: 'gray'}}>
      <ButtonAppBar /> 
      <Container style={{marginTop: '20px'}}>    
        <Routes>
          <Route path="/" element={<List isDesktop = {isDesktop}/>} />
          <Route path="/details/:id" element={<Details isDesktop = {isDesktop}/>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Container>
    </div>
  )
}
 
export default App;
