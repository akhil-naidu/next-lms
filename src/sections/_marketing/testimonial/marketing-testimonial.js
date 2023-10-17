import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import TestimonialItem from './marketing-testimonial-item';

// ----------------------------------------------------------------------

export default function MarketingTestimonial({ testimonials }) {
  const carousel = useCarousel({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: { xs: 8, md: 10 },
      },
    }),
  });

  return (
    <Box className="overflow-hidden" bgcolor= 'background.neutral'>
      <Container className='relative py-20 md:py-32'
       
      >
        <Stack spacing={2} className='text-center mb-16 md:mb-20'>
          <Typography variant="overline"  color='text.disabled' >
            Testimonials
          </Typography>

          <Typography variant="h2">Who Love Our Work</Typography>
        </Stack>

        <CarouselArrows
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{
            sx: {
              opacity: { xs: 0, md: 1 },
            },
          }}
          rightButtonProps={{
            sx: {
              opacity: { xs: 0, md: 1 },
            },
          }}
        >
          <Grid container spacing={10} justifyContent="center">
            <Grid xs={12} md={8}>
              <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                {testimonials.map((testimonial) => (
                  <TestimonialItem key={testimonial.id} testimonial={testimonial} />
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </CarouselArrows>
      </Container>
    </Box>
  );
}

MarketingTestimonial.propTypes = {
  testimonials: PropTypes.array,
};
