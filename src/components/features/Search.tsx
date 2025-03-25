import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import debounce from 'lodash.debounce';
import { useCallback, useState } from 'react';

import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/slices/filterSlice';

export const Search = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClear = () => {
    setValue('');
    dispatch(setSearchValue(''));
  };

  return (
    <TextField
      value={value}
      variant="standard"
      placeholder="Search..."
      onChange={onChangeInput}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: value && (
          <InputAdornment position="end">
            <IconButton onClick={onClear} size="small">
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
      sx={{
        maxWidth: 250,
      }}
    />
  );
};
