import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function CareerLandingTopCompanies({ companies }) {
  const theme = useTheme();

  const carousel = useCarousel({
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <Box className="md:pt-30 overflow-hidden pt-20" bgcolor="background.neutral">
      <Container>
        <Typography variant="h2" className="text-center">
          Top Companies
        </Typography>

        <Box className="relative">
          <CarouselArrows
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
            leftButtonProps={{ sx: { left: { xs: 0, md: -40 } } }}
            rightButtonProps={{ sx: { right: { xs: 0, md: -40 } } }}
          >
            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {companies.map((company) => (
                <Box className="px-4 py-16 md:py-20" key={company.id}>
                  <CompanyItem company={company} />
                </Box>
              ))}
            </Carousel>
          </CarouselArrows>
        </Box>
      </Container>
    </Box>
  );
}

CareerLandingTopCompanies.propTypes = {
  companies: PropTypes.array,
};

// ----------------------------------------------------------------------

function CompanyItem({ company }) {
  return (
    <Link component={RouterLink} href={paths.career.jobs} color="inherit" underline="none">
      <Box
        sx={{
          py: 5,
          px: 3,
          borderRadius: 2,
          cursor: 'pointer',
          textAlign: 'center',
          position: 'relative',
          transition: (theme) =>
            theme.transitions.create('all', {
              duration: theme.transitions.duration.enteringScreen,
            }),
          '&:hover': {
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        <Image className="mx-auto h-14 w-14 rounded-md" alt={company.name} src={company.logo} />
        <div className="mb-1 mt-5">
          <Typography variant="body2" color="text.disabled">
            {company.totalJobs} jobs
          </Typography>
        </div>

        <TextMaxLine variant="subtitle2" persistent>
          {company.name}
        </TextMaxLine>
      </Box>
    </Link>
  );
}

CompanyItem.propTypes = {
  company: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string,
    totalJobs: PropTypes.number,
  }),
};
