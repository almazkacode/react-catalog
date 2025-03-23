import { Typography, Box } from '@mui/material';

import { useSelector } from 'react-redux';
import { cartSelector } from '../redux/slices/cartSlice';
import { ErrorPage } from '../components/ErrorPage';

export const Cart: React.FC = () => {
  const { totalPrice, totalCount } = useSelector(cartSelector);

  return !totalCount ? (
    <ErrorPage page="EmptyCart" />
  ) : (
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
