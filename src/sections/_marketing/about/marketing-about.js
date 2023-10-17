import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import CountUp from 'src/components/count-up';
import { useResponsive } from 'src/hooks/use-responsive';
import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SUMMARY = [
  { title: 'Years of experience', total: 12, icon: 'carbon:increase-level' },
  { title: 'Awards', total: 20, icon: 'carbon:trophy' },
  { title: 'Projects', total: 150, icon: 'carbon:data-vis-4' },
  { title: 'Happy clients', total: 32000, icon: 'carbon:user-certification' },
];

// ----------------------------------------------------------------------

const StyledIcon = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  color: theme.palette[color].darker,
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  '&:before': {
    zIndex: 8,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  '& svg': {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAbout() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container className="pt-10 md:pt-20">
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image alt="teams" src="/assets/illustrations/illustration_teams.svg" />
          </Grid>
        )}

        <Grid className="text-center md:text-left" xs={12} md={6} lg={6}>
          <Typography variant="h2">Who We Are?</Typography>
          <div className="mb-10 mt-6 text-gray-500">
            <Typography>
              Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc fringilla tristique.
              Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.
              <br />
              <br />
              Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
              dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor
              pulvinar varius.
            </Typography>
          </div>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            Check Our Work
          </Button>
        </Grid>
      </Grid>

      <Box className="mt-20 grid grid-cols-1 gap-10 text-center sm:grid-cols-2 md:grid-cols-4 md:gap-16">
        {SUMMARY.map((value, index) => (
          <div key={value.title}>
            <StyledIcon color={COLORS[index]}>
              <Iconify icon={value.icon} width={48} />
            </StyledIcon>

            <div className="mt-2 mt-4">
              <Typography variant="h2">
                <CountUp
                  start={value.total / 5}
                  end={value.total}
                  formattingFn={(newValue) => fShortenNumber(newValue)}
                />
              </Typography>
            </div>

            <Typography color="text.secondary">{value.title}</Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
