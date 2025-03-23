import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { ProductItemInterface } from '../redux/slices/productsSlice';

interface ProductItemProps {
  product: ProductItemInterface;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { title, image, category, price } = product;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        padding: '24px',
        paddingBottom: '0',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: '100%',
          height: '200px',
          objectFit: 'contain',
        }}
      />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '8px',
          flexGrow: 1,
          width: '100%',
          padding: '24px 0 0',
        }}
      >
        <Typography variant="h6" component="h3">
          {title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '8px',
            marginTop: 'auto',
          }}
        >
          <Typography variant="caption" color="textSecondary">
            {category}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Typography variant="h6">${price}</Typography>
            <Button variant="contained" color="primary">
              Buy
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
