import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PricingMarketingCard({ plan }) {
  const basicLicense = plan.license === 'Basic';

  const starterLicense = plan.license === 'Starter';

  const premiumLicense = plan.license === 'Premium';

  return (
    <Card
      sx={{
        p: 5,
        pt: 8,
        boxShadow: (theme) => ({ md: theme.customShadows.z8 }),
        ...(starterLicense && {
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      {starterLicense && (
        <Label color="info" className="absolute left-8 top-6">
          POPULAR
        </Label>
      )}

      <Stack direction="row" justifyContent="space-between">
        <div>
          <div className="mb-4 text-[#6E00FF]">
            <Typography variant="h4" component="div">
              {plan.license}
            </Typography>
          </div>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h3" component="span">{`$${plan.price}`}</Typography>
            <Typography variant="h5" component="span" color="text.disabled">
              /mo
            </Typography>
          </Stack>
        </div>

        <Image alt="icon" src={plan.icon} className="h-[64px] w-[64px]" />
      </Stack>

      <div className="mt-6 text-gray-500">
        <Typography variant="body2">{plan.caption}</Typography>
      </div>

      <Stack spacing={2} className="my-10">
        {plan.options.map((option) => (
          <Stack key={option} direction="row" alignItems="center" typography="body2">
            <div className="mr-4 text-[#6E00FF]">
              <Iconify icon="carbon:checkmark" />{' '}
            </div>
            {option}
          </Stack>
        ))}
      </Stack>

      <Button
        fullWidth
        size="large"
        color={(premiumLicense && 'primary') || 'inherit'}
        variant={(basicLicense && 'outlined') || 'contained'}
      >
        Choose Package
      </Button>
    </Card>
  );
}

PricingMarketingCard.propTypes = {
  plan: PropTypes.shape({
    caption: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    license: PropTypes.string,
    options: PropTypes.array,
    price: PropTypes.string,
  }),
};
