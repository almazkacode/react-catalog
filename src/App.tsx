import { Routes, Route } from 'react-router-dom';
import { Container, Box, CssBaseline } from '@mui/material';
import './App.css';

import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

import { Header } from './components/Header';
import { ErrorPage } from './components/ErrorPage';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Box component="main" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage page="NotFound" />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
};
