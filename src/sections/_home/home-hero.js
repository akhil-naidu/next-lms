import { useRef } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { HEADER } from 'src/layouts/config-layout';
import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';

// ----------------------------------------------------------------------

export default function HomeHero() {
  const theme = useTheme();

  const containerRef = useRef(null);

  const mdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
        position: 'relative',
        height: { md: `calc(100vh - ${HEADER.H_DESKTOP}px)` },
        alignItems: 'center',
      }}
    >
      <Container className="h-full">
        <Grid className="h-full" container columnSpacing={3} alignItems="center">
          <Grid xs={12} md={5}>
            <Stack
              className="py-[120px] text-center md:text-left"
              spacing={5}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
            >
              <Typography variant="h1">
                Create Your <br /> Website Today with
                <Box component="span" color="primary.main">
                  {` CQL Design`}
                </Box>
              </Typography>

              <Typography color="text.secondary">
                The CQL Design is built on top of MUI, a powerful library that provides flexible,
                customizable, and easy-to-use components.
              </Typography>

              <Button
                color="inherit"
                size="large"
                variant="contained"
                endIcon={<Iconify icon="carbon:launch" />}
                target="_blank"
                rel="noopener"
                href={paths.figmaPreview}
              >
                figma workspace
              </Button>

              <Stack spacing={3}>
                <Typography variant="overline">AVAILABLE FOR</Typography>
                <Stack direction="row" spacing={2.5}>
                  {['js', 'ts', 'figma', 'cra', 'nextjs'].map((icon) => (
                    <SvgColor
                      className="h-[24px] w-[24px]"
                      key={icon}
                      src={`/assets/icons/platforms/ic_${icon}.svg`}
                    />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      {mdUp && (
        <Box
          sx={{
            maxWidth: 1280,
            position: 'absolute',
            bottom: { md: '20%', lg: 40 },
            right: { md: -110, xl: 0 },
            width: { md: `calc(100% - ${offsetLeft}px)` },
          }}
        >
          <Image
            visibleByDefault
            disabledEffect
            alt="home hero"
            src="/assets/images/home/home_hero.png"
          />
        </Box>
      )}
    </Box>
  );
}
