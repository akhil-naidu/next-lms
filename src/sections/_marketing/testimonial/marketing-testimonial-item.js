import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function TestimonialItem({ testimonial, ...other }) {
  return (
    <Stack
      spacing={{
        xs: 5,
        md: 10,
      }}
      direction={{
        xs: 'column',
        md: 'row',
      }}
      {...other}
    >
      <div className='md:text-xl pb-10 loading-7 text-center md:text-left'>
      {testimonial.review}
      </div>
    
      <Stack className='shrink-0 text-center'>
        <Avatar
          alt={testimonial.name}
          src={testimonial.avatarUrl}
          sx={{ width: 96, height: 96, mx: 'auto' }}
        />

      <div className="mt-5 mb-1">
      <Typography variant="h6" >
          {testimonial.name}
        </Typography>
      </div>
        

        <Typography variant="body2" color='text.secondary'>
          {testimonial.role}
        </Typography>
      </Stack>
    </Stack>
  );
}

TestimonialItem.propTypes = {
  testimonial: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    review: PropTypes.string,
    role: PropTypes.string,
  }),
};
