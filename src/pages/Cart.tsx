import { Typography, Box } from '@mui/material';

export const Cart: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: '50px 0',
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontSize: {
            xs: 36,
            md: 48,
          },
        }}
      >
        Cart
      </Typography>
    </Box>
  );
};
