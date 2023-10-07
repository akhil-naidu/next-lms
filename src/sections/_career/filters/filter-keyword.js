import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import { _jobTitles } from 'src/_mock';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FilterKeyword({ filterKeyword, onChangeKeyword, sx }) {
  return (
    <Autocomplete
      className="w-full"
      options={_jobTitles}
      getOptionLabel={(option) => option}
      value={filterKeyword}
      onChange={(event, value) => onChangeKeyword(value)}
      renderInput={(params) => (
        <TextField
          className="pb-2"
          {...params}
          hiddenLabel
          placeholder="Job title, keywords..."
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:search" color="text.disabled" className="mr-2" />
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

FilterKeyword.propTypes = {
  filterKeyword: PropTypes.string,
  onChangeKeyword: PropTypes.func,
  sx: PropTypes.object,
};
