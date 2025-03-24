import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ERROR_DATA } from '../errorData';

interface ErrorPageProps {
  page: string;
  showButton?: boolean;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ page, showButton = true }) => {
  const errorContent = ERROR_DATA.find((error) => error.page === page)?.content;

  if (!errorContent) {
    return <Box>Page not found</Box>;
  }

  const { title, text } = errorContent;
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
        {title}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
        {text}
      </Typography>
      {showButton && (
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Go to Catalog
          </Button>
        </Link>
      )}
    </Box>
  );
};
