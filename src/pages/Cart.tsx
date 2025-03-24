import { Typography, Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { cartSelector, clearItems } from '../redux/slices/cartSlice';

import { ErrorPage } from '../components/ErrorPage';
import CartItem from '../components/CartItem';

const Cart: React.FC = () => {
  const { totalPrice, totalCount, items } = useSelector(cartSelector);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return !totalCount ? (
    <ErrorPage page="EmptyCart" />
  ) : (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        width: '100%',
        padding: '50px 0',
      }}
    >
      <Typography
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
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ width: '100%' }}>
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'space-between', marginBottom: 3 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="outlined">Back</Button>
            </Link>
            <Button variant="contained" color="error" onClick={handleClearCart}>
              Clear Cart
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              width: '100%',
            }}
          >
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: 3,
              border: '1px solid #ccc',
              borderRadius: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: 16,
                  md: 24,
                },
              }}
            >
              Total Items: {totalCount}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: 16,
                  md: 24,
                },
              }}
            >
              Total Price: ${totalPrice.toFixed(2)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
