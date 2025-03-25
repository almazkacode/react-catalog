import { Box, Typography, IconButton, CardMedia } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CartItem as CartItemType, removeItem } from '../../redux/slices/cartSlice';
import { useAppDispatch } from '../../redux/store';

import { CountButton } from '../features/CountButton';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: {
          xs: 1,
          md: 2,
        },
        width: '100%',
        height: 'auto',
        padding: {
          xs: 1,
          md: 2,
        },
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
        }}
      >
        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          sx={{
            width: 80,
            height: 80,
            objectFit: 'contain',
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          justifyContent: 'space-between',
          alignItems: {
            xs: 'start',
            md: 'center',
          },
          gap: {
            xs: 1,
            md: 3,
          },
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: {
              xs: 1,
              md: 3,
            },
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontSize: {
                xs: 14,
                md: 20,
              },
            }}
          >
            {item.title}
          </Typography>
          <CountButton id={item.id} count={item.count} disableMinus={true} />
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: 14,
              md: 24,
            },
            fontWeight: 'bold',
            userSelect: 'none',
          }}
        >
          ${(item.price * item.count).toFixed(2)}
        </Typography>
      </Box>

      <IconButton
        onClick={handleRemove}
        color="error"
        sx={{ alignItems: 'start', width: 3, height: 3 }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};
