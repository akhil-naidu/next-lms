import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PricingHomeCard({ plan }) {
  const standardLicense = plan.license === 'Standard';

  const plusLicense = plan.license === 'Plus';

  const extendedLicense = plan.license === 'Extended';

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: (theme) => theme.customShadows.z8,
        ...(plusLicense && {
          py: 10,
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      {plusLicense && (
        <Label color="info" className="absolute left-10 top-10">
          POPULAR
        </Label>
      )}

      <Stack spacing={5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5" component="div" textTransform="uppercase">
            {plan.license}
          </Typography>

          <Stack direction="row" spacing={0.5}>
            <Typography variant="h4" component="span">
              $
            </Typography>
            <Typography variant="h3" component="span">
              {plan.price}
            </Typography>
          </Stack>
        </Stack>

        {standardLicense ? (
          <Image alt="standard" src={plan.icons[0]} className="h-[24px] w-[24px]" />
        ) : (
          <Stack direction="row" spacing={1.5}>
            {plan.icons.map((icon) => (
              <Image key={icon} alt={icon} src={icon} className="h-[24px] w-[24px]" />
            ))}
          </Stack>
        )}

        <Stack spacing={2.5}>
          {plan.commons.map((option) => (
            <Stack key={option} spacing={1.5} direction="row" alignItems="center">
              <Iconify
                icon="carbon:checkmark-outline"
                color="primary.main"
                width={20}
                height={20}
              />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          ))}

          <Divider borderStyle="dashed" />

          {plan.options.map((option) => (
            <Stack
              className={`${option.disabled && 'text-gray-400'}`}
              key={option.title}
              direction="row"
              alignItems="center"
              typography="body2"
            >
              <Iconify
                icon={option.disabled ? 'carbon:close-outline' : 'carbon:checkmark-outline'}
                className={`mr-4 text-[#6E00FF] ${option.disabled && 'text-current'}`}
              />
              {option.title}
            </Stack>
          ))}
        </Stack>

        <Stack alignItems="flex-end" spacing={3}>
          <Button
            size="large"
            fullWidth
            variant={standardLicense ? 'outlined' : 'contained'}
            color={extendedLicense ? 'primary' : 'inherit'}
            target="_blank"
            rel="noopener"
            href={paths.zoneStore}
          >
            Choose Package
          </Button>

          <Link
            className="flex items-center"
            color="text.secondary"
            target="_blank"
            rel="noopener"
            variant="body2"
            href={paths.license}
          >
            Read license
            <Iconify icon="carbon:chevron-right" width={16} className="ml-2" />
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
}

PricingHomeCard.propTypes = {
  plan: PropTypes.shape({
    commons: PropTypes.array,
    icons: PropTypes.array,
    license: PropTypes.string,
    options: PropTypes.array,
    price: PropTypes.string,
  }),
};
