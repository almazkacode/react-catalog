import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { filterSelector, setCategories } from '../../redux/slices/filterSlice';

interface CategorySelectProps {
  categories: string[];
}

export const CategorySelect: React.FC<CategorySelectProps> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector(filterSelector);

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    dispatch(setCategories(event.target.value));
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      sx={{
        maxWidth: 300,
      }}
    >
      <InputLabel
        sx={{
          bgcolor: 'white',
          px: 0.5,
        }}
      >
        Category
      </InputLabel>
      <Select value={category} onChange={handleCategoryChange}>
        <MenuItem value="all">all</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
