import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import { _tags } from 'src/_mock';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FilterCategories({ filterCategories, onChangeCategory }) {
  return (
    <Autocomplete
      className="w-full"
      options={_tags}
      getOptionLabel={(option) => option}
      value={filterCategories}
      onChange={(event, value) => onChangeCategory(value)}
      renderInput={(params) => (
        <TextField
          className="pb-2"
          {...params}
          hiddenLabel
          placeholder="Categories"
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  className="mr-2"
                  width={24}
                  icon="carbon:inventory-management"
                  color="text.disabled"
                />
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option}>
          {option}
        </li>
      )}
    />
  );
}

FilterCategories.propTypes = {
  filterCategories: PropTypes.string,
  onChangeCategory: PropTypes.func,
};
