import { Typography, Box, IconButton, Badge, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  const count = 5;

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
            xs: '20px',
            sm: '24px',
          },
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              height: '55px',
            }}
          >
            <ShoppingBagOutlinedIcon
              sx={{
                fontSize: {
                  xs: 26,
                  sm: 36,
                },
              }}
            />
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontSize: {
                  xs: 20,
                  sm: 36,
                },
              }}
            >
              Product Catalog
            </Typography>
          </Box>
        </Link>

        {location.pathname !== '/cart' && (
          <Link to="/cart">
            <IconButton>
              <Badge badgeContent={count} color="primary">
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
