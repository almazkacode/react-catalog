import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 2, sm: 3 },
        height: '100vh',
        textAlign: 'center',
        padding: { xs: 4, sm: 15 },
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', sm: '3rem' } }}>
        Error 404
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
        Something went wrong! The page you are looking for does not exist. It may have been moved,
        deleted, or you might have typed the wrong address.
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Go to Home
        </Button>
      </Link>
    </Box>
  );
};
