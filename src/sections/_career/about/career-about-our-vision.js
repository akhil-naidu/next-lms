import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function CareerAboutOurVision() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container className='overflow-height py-10 md:py-20'
    >
      <Grid
        container
        spacing={{
          xs: 8,
          md: 3,
        }}
        justifyContent="space-between"
      >
        <Grid xs={12} md={3}>
          <Typography variant="h3" className='md:pt-10'>
            Fusce convallis metus id felis luctus
          </Typography>

          <Typography color="text.secondary" className='mt-6' >
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
            Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
          </Typography>
        </Grid>

        {mdUp && (
          <Grid xs={12} md={4}>
            <Image
              alt="about introduce"
              src="/assets/images/career/career_3.jpg"
              ratio="3/4"
              className="rounded-xl"
            />
          </Grid>
        )}

        <Grid xs={12} md={3}>
          <Typography variant="h3" className='md:pt-10'>
            Fusce convallis metus id felis luctus
          </Typography>

          <Typography color="text.secondary" className='mt-6'>
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
            Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
