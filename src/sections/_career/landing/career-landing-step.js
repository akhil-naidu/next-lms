import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const STEPS = [
  {
    title: 'Create an account',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: '/assets/icons/ic_resume_job.svg',
  },
  {
    title: 'Complete your profile',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: '/assets/icons/ic_resume_job.svg',
  },
  {
    title: 'Search your job',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: '/assets/icons/ic_search_job.svg',
  },
];

// ----------------------------------------------------------------------

export default function CareerLandingStep() {
  return (
    <Box className="md:pt-30 pb-10 pt-20 text-center md:pb-20">
      <Container>
        <Typography variant="overline" color="text.disabled">
          For Candidates
        </Typography>
        <div className="my-6">
          <Typography variant="h2">Explore Thousands of Jobs</Typography>
        </div>

        <div className="mx-auto max-w-[480px]">
          <Typography color="text.secondary">
            Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis
            ullamcorper velit.
          </Typography>
        </div>

        <Box className="my-16 grid grid-cols-1 gap-16 md:my-20 md:grid-cols-3 md:gap-20">
          {STEPS.map((value, index) => (
            <div key={value.title}>
              <SvgColor
                src={value.icon}
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  color: 'primary.main',
                }}
              />
              <div className="mt-6 block ">
                <Typography variant="overline" color="text.disabled">
                  Step {index + 1}
                </Typography>
              </div>

              <div className="mb-2 mt-4">
                <Typography variant="h5">{value.title}</Typography>
              </div>

              <Typography variant="body2" color="text.secondary">
                {value.description}
              </Typography>
            </div>
          ))}
        </Box>

        <Button
          variant="contained"
          size="large"
          color="inherit"
          startIcon={<Iconify icon="carbon:cloud-upload" />}
        >
          Upload Your CV
        </Button>
      </Container>
    </Box>
  );
}
