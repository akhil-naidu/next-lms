import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FEATURE_HIGHLIGHTS = [
  { title: '5 Prebuilt Websites', icon: 'carbon:application-web' },
  { title: '60+ Demo Page', icon: 'carbon:stacked-scrolling-2' },
  { title: 'Easy to Customize', icon: 'carbon:settings-adjust' },
  { title: 'Color Presets', icon: 'carbon:color-switch' },
  { title: 'Dark Mode', icon: 'carbon:asleep' },
  { title: 'Awesome Animation', icon: 'carbon:boolean' },
  { title: 'Google Fonts', icon: 'carbon:text-font' },
  { title: 'Figma Design', icon: 'ph:figma-logo' },
  { title: 'Fully Responsive', icon: 'carbon:devices' },
  { title: 'Mega Menu', icon: 'carbon:list-dropdown' },
  { title: 'Clean Markup', icon: 'carbon:script' },
  { title: 'Free Updates', icon: 'carbon:update-now' },
  { title: 'Fast Support', icon: 'carbon:headset' },
  { title: 'Well Documented', icon: 'carbon:notebook' },
];

// ----------------------------------------------------------------------

export default function HomeFeatureHighlights() {
  return (
    <Container className="md:pb-30 overflow-hidden pb-20 pt-10 md:pt-20" component={MotionViewport}>
      <Grid container spacing={{ xs: 8, md: 3 }} justifyContent={{ md: 'space-between' }}>
        <Grid className="text-center md:text-left" xs={12} md={4}>
          <m.div variants={varFade().inUp}>
            <Typography variant="overline" color="text.disabled">
              Feature Highlights
            </Typography>
          </m.div>

          <m.div className="my-6" variants={varFade().inUp}>
            <Typography variant="h2">Have Everything You Need</Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography color="text.secondary">
              {`Let's see what makes our theme super powerful and user-friendly!`}
            </Typography>
          </m.div>
        </Grid>

        <Grid xs={12} md={7}>
          <Box className=" grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3">
            {FEATURE_HIGHLIGHTS.map((feature) => (
              <m.div key={feature.title} variants={varFade({ distance: 40 }).in}>
                <Box className="text-center">
                  <Iconify icon={feature.icon} width={32} />
                  <div className="mt-4 text-sm font-semibold">{feature.title}</div>
                </Box>
              </m.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
