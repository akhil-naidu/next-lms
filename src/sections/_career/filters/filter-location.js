import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import { countries } from 'src/assets/data';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FilterLocation({ filterLocation, onChangeLocation, sx }) {
  return (
    <Autocomplete
      className="w-full"
      options={countries}
      getOptionLabel={(option) => option.label}
      value={filterLocation}
      onChange={(event, value) => onChangeLocation(value)}
      renderInput={(params) => (
        <TextField
          className="pb-2"
          {...params}
          hiddenLabel
          placeholder="Locations"
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:location" color="text.disabled" className="mr-2" />
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, option) => {
        if (!option.label) {
          return null;
        }

        return (
          <li {...props} key={option.label}>
            <Iconify
              className="mr-2"
              key={option.label}
              icon={`circle-flags:${option.code.toLowerCase()}`}
              width={28}
            />
            {option.label} ({option.code}) +{option.phone}
          </li>
        );
      }}
    />
  );
}

FilterLocation.propTypes = {
  filterLocation: PropTypes.string,
  onChangeLocation: PropTypes.func,
  sx: PropTypes.object,
};
