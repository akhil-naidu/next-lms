import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _pricingMarketing } from 'src/_mock';

import PlanCard from './pricing-marketing-card';

// ----------------------------------------------------------------------

export default function PricingMarketing({ plans }) {
  const a = _pricingMarketing;
  return (
    <Container className="pb-10 pt-20 md:pb-20">
      <Stack
        className="mb-10 md:mb-20"
        spacing={5}
        alignItems={{ xs: 'center', md: 'flex-end' }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Stack className="md:mx-unset mx-auto max-w-[480px] text-center md:text-left" spacing={3}>
          <Typography variant="overline" color="text.disabled">
            Pricing
          </Typography>

          <Typography variant="h2">Check Our Pricing</Typography>

          <Typography color="text.secondary">
            Choose the perfect plan for your needs.
            <br /> Always flexible to grow
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          <Typography variant="overline">MONTHLY</Typography>

          <Switch defaultChecked />

          <Typography variant="overline">YEARLY (save 10%)</Typography>
        </Stack>
      </Stack>

      <Box className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
        {a.map((plan) => (
          <PlanCard key={plan.license} plan={plan} />
        ))}
      </Box>
    </Container>
  );
}

PricingMarketing.propTypes = {
  plans: PropTypes.array,
};
