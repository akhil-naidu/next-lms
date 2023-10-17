'use client';

import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _pricing02 } from 'src/_mock';
import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';

import PlanHeader from '../02/pricing-02-header';
import PlanContentMobile from '../02/pricing-02-content-mobile';
import PlanContentDesktop from '../02/pricing-02-content-desktop';

// ----------------------------------------------------------------------

export default function Pricing02View() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container className="min-h-full pb-20 pt-28 md:pb-28 md:pt-32">
      <Typography variant="h3" align="center" paragraph>
        Flexible plans for your
        <br /> community&apos;s size and needs
      </Typography>
      <div className="mb-10 text-gray-500 md:mb-16">
        <Typography align="center">
          Choose your plan and make modern online conversation magic
        </Typography>
      </div>

      <Grid container alignItems="flex-end">
        {mdUp && (
          <Grid xs={12} md={3} paddingBottom={5}>
            <Typography variant="overline" color="primary.main">
              Feature
            </Typography>
          </Grid>
        )}

        {_pricing02.map((plan) => (
          <Grid
            key={plan.license}
            xs={12}
            md={3}
            sx={{
              mb: { xs: 4, md: 0 },
              borderRadius: { xs: 2, md: 0 },
              boxShadow: (theme) => ({ xs: theme.customShadows.z16, md: 0 }),
            }}
          >
            <PlanHeader plan={plan} />
            {!mdUp && <PlanContentMobile plan={plan} />}
          </Grid>
        ))}
      </Grid>

      {mdUp && (
        <Grid container>
          <Grid className="border-t" xs={12} md={3}>
            {_pricing02[0].options.map((option) => (
              <Stack
                className="h-[72px] border-b"
                key={option.title}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="subtitle2">{option.title}</Typography>

                <Tooltip title={option.tootip} placement="right" arrow>
                  <div>
                    <Iconify icon="carbon:information" color="text.secondary" />
                  </div>
                </Tooltip>
              </Stack>
            ))}
          </Grid>

          {_pricing02.map((plan) => (
            <Grid className="border-t" key={plan.license} xs={12} md={3}>
              <PlanContentDesktop plan={plan} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
