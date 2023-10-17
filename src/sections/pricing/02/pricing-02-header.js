import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Label from 'src/components/label';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function Pricing02Header({ plan }) {
  const startLicense = plan.license === 'Start';

  const proLicense = plan.license === 'Pro';

  return (
    <Stack
      className={`relative px-6 py-10 ${proLicense && 'rounded-t-2xl md:bg-[#F4F6F8]'}`}
      spacing={2}
      alignItems={{ xs: 'flex-start', md: 'center' }}
    >
      {proLicense && (
        <Label color="info" className="absolute right-4 top-4">
          POPULAR
        </Label>
      )}

      <Typography variant="overline" color="text.secondary">
        {plan.license}
      </Typography>

      <Stack
        className={`${proLicense && 'md:text-[#6E00FF]'}`}
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={0.5}
      >
        {!startLicense && (
          <Typography variant="h4" component="span">
            $
          </Typography>
        )}

        <Typography variant="h3" component="span">
          {plan.price}
        </Typography>

        {!startLicense && (
          <Typography variant="subtitle2" component="span">
            /mo
          </Typography>
        )}
      </Stack>

      <Image alt={plan.icon} src={plan.icon} className="h-[80px] w-[80px]" />

      <Typography variant="body2" color="text.secondary">
        {plan.caption}
      </Typography>
    </Stack>
  );
}

Pricing02Header.propTypes = {
  plan: PropTypes.shape({
    caption: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    license: PropTypes.string,
    price: PropTypes.string,
  }),
};
