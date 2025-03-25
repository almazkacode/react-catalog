import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { ProductItemInterface } from '../../../redux/slices/productsSlice';
import { addItem, cartItemsSelector, CartItem } from '../../../redux/slices/cartSlice';
import { useAppDispatch } from '../../../redux/store';
import { useSelector } from 'react-redux';

import { CountButton } from '../../features/CountButton';

interface ProductItemProps {
  product: ProductItemInterface;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { title, image, category, price, id } = product;

  const dispatch = useAppDispatch();
  const itemsInCart = useSelector(cartItemsSelector);
  const cartItem = itemsInCart.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (!cartItem) {
      const cartItemData: CartItem = {
        id,
        title,
        image,
        price,
        count: 1,
      };
      dispatch(addItem(cartItemData));
    }
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minWidth: 270,
        height: 'auto',
        padding: 3,
        paddingBottom: 0,
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: 1,
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: '100%',
          height: 200,
          objectFit: 'contain',
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 1,
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
            gap: 1,
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
              gap: 2,
              height: 40,
            }}
          >
            <Typography variant="h6">${price}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {cartItem && cartItem.count > 0 ? (
                <CountButton id={cartItem.id} count={cartItem.count} />
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddToCart}
                  sx={{ width: 110 }}
                >
                  Buy
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
