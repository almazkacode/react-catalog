import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useAppDispatch } from '../redux/store';
import { updateItemCount } from '../redux/slices/cartSlice';

interface CountButtonProps {
  id: number;
  count: number;
  disableMinus?: boolean;
}

export const CountButton: React.FC<CountButtonProps> = ({ id, count, disableMinus = false }) => {
  const dispatch = useAppDispatch();

  const updateCount = (delta: number) => {
    dispatch(updateItemCount({ id, delta }));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <IconButton onClick={() => updateCount(-1)} disabled={disableMinus && count === 1}>
        <RemoveIcon />
      </IconButton>
      <Typography
        sx={{
          userSelect: 'none',
          fontSize: {
            xs: 14,
            md: 20,
          },
        }}
      >
        {count}
      </Typography>
      <IconButton onClick={() => updateCount(1)}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};
