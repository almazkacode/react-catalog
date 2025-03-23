import { Typography, Box } from '@mui/material';

export const Cart: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '50px 0' }}>
      <Typography variant="h4" color="error">
        Cart
      </Typography>
    </Box>
  );
};
