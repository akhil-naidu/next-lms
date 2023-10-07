import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Label from 'src/components/label';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function Pricing01Card({ plan }) {
  const basicLicense = plan.license === 'Basic';

  const starterLicense = plan.license === 'Starter';

  const premiumLicense = plan.license === 'Premium';

  return (
    <Card className='P-10 text-center'
      sx={{
        p: 5,
        textAlign: 'center',
        boxShadow: (theme) => theme.customShadows.z8,
        ...(starterLicense && {
          py: 8,
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      {starterLicense && (
        <Label color="info" className="absolute top-[16px] right-[16px]" >
          POPULAR
        </Label>
      )}

      <Stack spacing={5} alignItems="center">
        <Typography variant="overline" component="div" color= 'text.secondary'>
          {plan.license}
        </Typography>

        <Image alt={plan.icon} src={plan.icon} className="w-[80px] h=[80px]"/>

        <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
          {!basicLicense && (
            <Typography variant="h4" component="span">
              $
            </Typography>
          )}

          <Typography variant="h3" component="span">
            {plan.price}
          </Typography>

          {!basicLicense && (
            <Typography variant="subtitle2" component="span">
              /mo
            </Typography>
          )}
        </Stack>

        <Stack spacing={1}  className="text-center">
          {plan.options.map((option) => (
            <Typography
              key={option.title}
              variant={option.disabled ? 'body2' : 'subtitle2'}
              sx={{
                ...(option.disabled && {
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }),
              }}
            >
              {option.title}
            </Typography>
          ))}
        </Stack>

        <Button
          fullWidth
          disabled={basicLicense}
          size="large"
          variant={basicLicense ? 'outlined' : 'contained'}
          color={premiumLicense ? 'primary' : 'inherit'}
        >
          {basicLicense && 'Current Plan'}
          {starterLicense && 'Choose Starter'}
          {premiumLicense && 'Choose Premium'}
        </Button>
      </Stack>
    </Card>
  );
}

Pricing01Card.propTypes = {
  plan: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    license: PropTypes.string,
    options: PropTypes.array,
    price: PropTypes.string,
  }),
};
