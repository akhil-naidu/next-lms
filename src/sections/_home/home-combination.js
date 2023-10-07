import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeCombination() {
  const mdUp = useResponsive('up', 'md');

  const visitBtn = (
    <m.div className={`${mdUp && 'mt-10'}`} variants={varFade().inLeft}>
      <Button
        size="large"
        color="inherit"
        variant="outlined"
        target="_blank"
        rel="noopener"
        href={paths.minimalStore}
        endIcon={<Iconify icon="carbon:chevron-right" width={16} />}
      >
        Visit Minimal Dashboard
      </Button>
    </m.div>
  );

  return (
    <Container
      className="md:pb-30 relative pb-20 pt-10 text-center md:pt-20 md:text-left"
      component={MotionViewport}
    >
      <Box
        className="md:text-20 rounded-3xl p-4 md:p-20"
        bgcolor={{ xs: 'transparent', md: 'background.neutral' }}
      >
        <m.div variants={varFade().inUp}>
          <Typography variant="overline" color="text.disabled">
            Perfect combination
          </Typography>
        </m.div>

        <m.div className="my-6" variants={varFade().inUp}>
          <Typography variant="h3">
            Looking For a <br />
            Dashboard Template?
          </Typography>
        </m.div>

        <m.div className="mx-auto max-w-[360px] md:mx-0" variants={varFade().inUp}>
          <Typography color="text.secondary">
            Minimal UI Kit is a professional dashboard used by many of our clients.
          </Typography>
        </m.div>

        {mdUp && visitBtn}
      </Box>

      <Box className="my-16 md:absolute md:right-[-120px] md:top-[-40px] md:my-0">
        <m.div variants={varFade().inDown}>
          <Image
            className="md:max-w-[790px]"
            alt="minimal dashboard"
            src="/assets/images/home/minimal_dashboard.png"
          />
        </m.div>
      </Box>

      {!mdUp && visitBtn}
    </Container>
  );
}
