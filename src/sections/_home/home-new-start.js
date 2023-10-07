import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeNewStart() {
  return (
    <Container className="pb-10 pt-20 md:pb-20 md:pt-32" component={MotionViewport}>
      <Paper
        sx={{
          pb: 10,
          borderRadius: 3,
          textAlign: 'center',
          bgcolor: 'background.neutral',
        }}
      >
        <m.div variants={varFade().inUp}>
          <Image
            className="mx-auto max-w-[720px]"
            alt="cover"
            src="/assets/images/home/new_start.png"
          />
        </m.div>

        <Box className="mx-auto mt-6 max-w-[560px] px-6">
          <m.div variants={varFade().inDown}>
            <Typography variant="overline" color="text.disabled">
              new start
            </Typography>
          </m.div>

          <m.div className="my-6" variants={varFade().inDown}>
            <Typography variant="h2">
              The
              <Box component="span" color="primary.main">
                {` CQL Design `}
              </Box>
              UI Kit
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography color="text.secondary">
              Modern ui kit to save your time, boost your creativity. Neat and super stylish layout
              ready to help with your projects
            </Typography>
          </m.div>
        </Box>
      </Paper>
    </Container>
  );
}
