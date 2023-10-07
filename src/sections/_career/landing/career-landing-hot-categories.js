import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { _jobsByCategories } from 'src/_mock';
import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function CareerLandingHotCategories({ categories }) {
  const ct = _jobsByCategories;
  return (
    <Container className="md:pt-30 pb-10 pt-20 md:pb-20">
      <Typography variant="h2" className="text-center">
        Hot Categories
      </Typography>

      <Box className="my-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:my-20 md:grid-cols-4 ">
        {ct.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </Box>

      <Stack alignItems="center">
        <Button
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View All Categories
        </Button>
      </Stack>
    </Container>
  );
}

CareerLandingHotCategories.propTypes = {
  categories: PropTypes.array,
};

// ----------------------------------------------------------------------

function CategoryItem({ category }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        pt: '100%',
        borderRadius: 2,
        cursor: 'pointer',
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'transparent',
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z24,
          '& .icon': {
            bgcolor: 'primary.main',
            transition: (theme) => theme.transitions.create('all'),
            '& > span': {
              color: 'common.white',
            },
          },
        },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          top: 0,
          position: 'absolute',
        }}
      >
        <Box
          className="icon"
          sx={{
            mb: 2.5,
            width: 72,
            height: 72,
            mx: 'auto',
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SvgColor src={category.icon} sx={{ width: 48, height: 48 }} />
        </Box>

        <TextMaxLine variant="h6" line={1}>
          {category.name}
        </TextMaxLine>

        <Typography variant="body2" sx={{ color: 'text.disabled', mt: 0.5 }}>
          {category.totalJobs} jobs
        </Typography>
      </Stack>
    </Paper>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    totalJobs: PropTypes.number,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};
