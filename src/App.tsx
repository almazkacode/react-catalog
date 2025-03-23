import { Routes, Route } from 'react-router-dom';
import { Container, Box, CssBaseline } from '@mui/material';

import { Home } from './pages/Home';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box component="main" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
};
