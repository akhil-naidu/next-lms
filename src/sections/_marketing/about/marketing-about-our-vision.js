import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledTypography = styled(Typography)(({ theme }) => ({
  maxWidth: 564,
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    zIndex: 9,
    position: 'absolute',
    color: theme.palette.common.white,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutOurVision() {
  const theme = useTheme();

  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" className="relative">
        <div className="mb-10 text-center text-white md:absolute md:left-0 md:right-0 md:top-[80px] md:z-20">
          <Typography variant="h2">Our vision</Typography>
        </div>

        <Stack
          className="relative w-full overflow-hidden rounded-2xl"
          alignItems="center"
          justifyContent="center"
        >
          <div className="z-18 absolute">
            <Fab color="primary">
              <Iconify icon="carbon:play" width={24} />
            </Fab>
          </div>
          <Image
            alt="hero"
            src="/assets/images/marketing/marketing_post_01.jpg"
            ratio="16/9"
            overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
              theme.palette.common.black
            } 100%)`}
          />
        </Stack>
        <div className='mt-10 lg:mt-0'>
        <StyledTypography className="md:bottom-[80px] md:opacity-75" variant="h5">
          Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada.
        </StyledTypography>
        </div>
      </Stack>
    </Container>
  );
}
