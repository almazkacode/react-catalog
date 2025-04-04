import { Container, Box, CssBaseline } from '@mui/material';
import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { ErrorPage } from './components/elements/ErrorPage';
import { Loader } from './components/features/Loader';

const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Box component="main" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<ErrorPage page="NotFound" />} />
            </Routes>
          </Suspense>
        </Box>
      </Container>
    </>
  );
};
