'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';

import { _pricing01 } from 'src/_mock';

import PlanCard from '../01/pricing-01-card';

// ----------------------------------------------------------------------

export default function Pricing01View() {
  const [subscription, setSubscription] = useState('monthly');

  const handleChangeSubscription = useCallback((event, newValue) => {
    if (newValue !== null) {
      setSubscription(newValue);
    }
  }, []);

  return (
    <Container className=' pt-24 md:pt-32 pb-20 md:pb-28'>
      <Typography variant="h3" align="center" paragraph>
        Flexible plans for your
        <br /> community&apos;s size and needs
      </Typography>

      <Typography align="center" color= 'text.secondary'>
        Choose your plan and make modern online conversation magic
      </Typography>

      <Stack className='my-10 md:my-16'>
        <ToggleButtonGroup
          exclusive
          color="standard"
          value={subscription}
          onChange={handleChangeSubscription}
          sx={{
            mx: 'auto',
            border: 0,
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
            [`& .${toggleButtonClasses.root}`]: {
              m: 0,
              typography: 'overline',
              color: 'text.secondary',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${toggleButtonClasses.selected}`]: {
                bgcolor: 'text.primary',
                color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                '&:hover': {
                  bgcolor: 'text.primary',
                },
              },
            },
          }}
        >
          <ToggleButton value="monthly">MONTHLY</ToggleButton>
          <ToggleButton value="yearly">YEARLY (save 10%)</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Box className="grid gap-8 items-center grid-cols-1 md:grid-cols-3"
      >
        {_pricing01.map((plan) => (
          <PlanCard key={plan.license} plan={plan} />
        ))}
      </Box>
    </Container>
  );
}
