import { Typography, Box, IconButton, Badge, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../redux/slices/cartSlice';

export const Header = () => {
  const location = useLocation();
  const { totalPrice, totalCount } = useSelector(cartSelector);

  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: {
            xs: 2,
            sm: 3,
          },
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 55,
              fontSize: {
                xs: 20,
                sm: 36,
              },
            }}
          >
            Photo Point
          </Typography>
        </Link>

        {location.pathname !== '/cart' && (
          <Link
            to="/cart"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: {
                  xs: 20,
                  sm: 28,
                },
              }}
            >
              ${totalPrice}
            </Typography>
            <IconButton>
              <Badge badgeContent={totalCount} color="primary">
                <ShoppingCartIcon
                  sx={{
                    fontSize: {
                      xs: 26,
                      sm: 36,
                    },
                  }}
                />
              </Badge>
            </IconButton>
          </Link>
        )}
      </Container>
    </Box>
  );
};
