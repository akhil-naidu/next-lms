'use client';

import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { _socials } from 'src/_mock';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { useCountdown } from 'src/hooks/use-countdown';

// ----------------------------------------------------------------------

export default function ComingSoonView() {
  const { days, hours, minutes, seconds } = useCountdown(new Date('07/07/2024 21:30'));

  return (
    <div className="flex items-center justify-center pt-24 text-center">
      <div className="flex max-w-[400px] flex-col items-center justify-center text-center">
        <Typography variant="h3" paragraph>
          Coming Soon!
        </Typography>

        <Typography color="text.secondary">We are currently working hard on this page!</Typography>

        <Image
          className="mx-auto my-6 max-w-[320px]"
          alt="comingsoon"
          src="/assets/illustrations/illustration_comingsoon.svg"
        />

        <Stack
          direction="row"
          justifyContent="center"
          divider={<Box className="mx-2 sm:mx-5">:</Box>}
          typography="h2"
        >
          <TimeBlock label="Days" value={days} />

          <TimeBlock label="Hours" value={hours} />

          <TimeBlock label="Minutes" value={minutes} />

          <TimeBlock label="Seconds" value={seconds} />
        </Stack>

        <div className="my-10 w-full">
          <TextField
            fullWidth
            hiddenLabel
            placeholder="Enter your email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" size="large" color="inherit">
                    Notify
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Stack direction="row" justifyContent="center">
          {_socials.map((social) => (
            <IconButton key={social.value}>
              <Iconify icon={social.icon} color="social.color" />
            </IconButton>
          ))}
        </Stack>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------

function TimeBlock({ label, value }) {
  return (
    <div>
      <Box> {value} </Box>
      <Box color="text.secondary" typography="body1">
        {label}
      </Box>
    </div>
  );
}

TimeBlock.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
