import { Box, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { fetchProducts, productsSelector } from '../redux/slices/productsSlice';

import { ProductItem } from '../components/ProductItem/ProductItem';
import { Skeleton } from '../components/ProductItem/Skeleton';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(productsSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProducts());
  }, [dispatch]);

  let content;

  if (status === 'loading') {
    content = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  } else {
    content = items.map((product) => <ProductItem key={product.id} product={product} />);
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '50px 0' }}>
      {status === 'error' ? (
        <Typography variant="h4" color="error">
          Error accessing the server 😔
        </Typography>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
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
            Catalog
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {content.map((component, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                {component}
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};
