import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function TestimonialItem({ testimonial, sx, ...other }) {
  return (
    <Stack className="text-center" alignItems="center" {...other}>
      <Rating value={testimonial.ratingNumber} readOnly />
      <div className="my-6 ">
        <p className="leading-8 md:text-xl">{testimonial.review}</p>
      </div>

      <Typography variant="h6">{testimonial.name}</Typography>

      <Typography variant="body2" color="text.secondary">
        {testimonial.role}
      </Typography>
    </Stack>
  );
}

TestimonialItem.propTypes = {
  sx: PropTypes.object,
  testimonial: PropTypes.shape({
    name: PropTypes.string,
    review: PropTypes.string,
    role: PropTypes.string,
    ratingNumber: PropTypes.number,
  }),
};
