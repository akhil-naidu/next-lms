import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Customer Satisfaction',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: '/assets/icons/ic_agreement.svg',
  },
  {
    title: 'Transparency',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: '/assets/icons/ic_transparency.svg',
  },
  {
    title: 'Reputation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: '/assets/icons/ic_reputation.svg',
  },
  {
    title: 'Cooperation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: '/assets/icons/ic_popularity.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingAboutCoreValues() {
  return (
    <Container className='text-center pt-10 md:pt-20 pb-10 md:pb-30'
    >
      <div className='mb-16 md:mb-20'>
      <Typography variant="h2">
        Our Core Values
      </Typography>
      </div>
      <Box className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
       
      >
        {CORE_VALUES.map((value) => (
          <Box key={value.title}>
            <SvgColor 
              src={value.icon}
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                color: 'primary.main',
              }}
            />
            <div className='mt-10 mb-4'>
            <Typography variant="h5">
              {value.title}
            </Typography>
            </div>
           

            <Typography className='text-gray-500' > {value.description} </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
