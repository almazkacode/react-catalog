import { CircularProgress, Box } from '@mui/material';

export const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress size={150} thickness={2} />
    </Box>
  );
};
