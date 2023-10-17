import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import PlanCard from './pricing-home-card';

// ----------------------------------------------------------------------

export default function PricingHome({ plans }) {
  return (
    <Container className="pb-10 pt-20 md:pb-20 md:pt-32" component={MotionViewport}>
      <Box className="mb-16 text-center md:mb-20">
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" color="text.disabled">
            pricing plans
          </Typography>
        </m.div>

        <m.div className="my-6" variants={varFade().inDown}>
          <Typography variant="h2">
            The Right Plan <br />
            For Your Business
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography color="text.secondary">
            Choose the perfect plan for your needs. Always flexible to grow
          </Typography>
        </m.div>
      </Box>

      <Box className=" grid grid-cols-1 items-center gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <m.div key={plan.license} variants={varFade().inUp}>
            <PlanCard plan={plan} />
          </m.div>
        ))}
      </Box>
    </Container>
  );
}

PricingHome.propTypes = {
  plans: PropTypes.array,
};
