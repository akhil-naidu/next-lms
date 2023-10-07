'use client';

import { m } from 'framer-motion';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { RouterLink } from 'src/routes/components';
import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function MaintenanceView() {
  return (
    <MotionContainer>
      <div className="pt-24 text-center">
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Website Currently Under Maintenance
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography color="text.secondary">
            We are currently working hard on this page!
          </Typography>
        </m.div>

        <m.div className="mx-auto my-10 max-w-[320px] sm:my-16" variants={varBounce().in}>
          <Image alt="maintenance" src="/assets/illustrations/illustration_maintenance.svg" />
        </m.div>

        <Button component={RouterLink} href="/" size="large" color="inherit" variant="contained">
          Go to Home
        </Button>
      </div>
    </MotionContainer>
  );
}
