import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchProducts, productsSelector } from '../redux/slices/productsSlice';
import { filterSelector, clearFilters } from '../redux/slices/filterSlice';

import { ProductItem } from '../components/elements/ProductItem/ProductItem';
import { Skeleton } from '../components/elements/ProductItem/Skeleton';
import { Search } from '../components/features/Search';
import { ErrorPage } from '../components/elements/ErrorPage';
import { CategorySelect } from '../components/features/CategorySelect';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector(productsSelector);
  const { searchValue, category } = useAppSelector(filterSelector);

  const uniqueCategories = useMemo(
    () => Array.from(new Set(items.map((product) => product.category))),
    [items],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, [dispatch]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const searchFilter = item.title.toLowerCase().includes(searchValue.toLowerCase());
      const categoryFilter = category === 'all' || item.category === category;
      return searchFilter && categoryFilter;
    });
  }, [items, searchValue, category]);

  const content = useMemo(() => {
    if (status === 'loading') {
      return [...new Array(8)].map((_, index) => <Skeleton key={index} />);
    } else {
      return filteredItems.map((product) => <ProductItem key={product.id} product={product} />);
    }
  }, [status, filteredItems]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '50px 0', width: '100%' }}>
      {status === 'error' ? (
        <Typography variant="h4" color="error">
          Error accessing the server 😔
        </Typography>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            width: '100%',
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
            Catalog
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column-reverse',
                md: 'row',
              },
              justifyContent: {
                xs: 'center',
                md: 'space-between',
              },
              alignItems: 'center',
              gap: 3,
              width: '100%',
            }}
          >
            <CategorySelect categories={uniqueCategories} />
            <Search />
          </Box>
          {!filteredItems.length && status === 'success' ? (
            <ErrorPage page="EmptyFilter" showButton={false} />
          ) : (
            <Grid container spacing={3}>
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
          )}
        </Box>
      )}
    </Box>
  );
};

export default Home;
