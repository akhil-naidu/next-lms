import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';

// ----------------------------------------------------------------------

export default function Pricing02ContentMobile({ plan }) {
  const contentOpen = useBoolean();

  const startLicense = plan.license === 'Start';

  const proLicense = plan.license === 'Pro';

  const businessLicense = plan.license === 'Business';

  return (
    <Stack spacing={5} className="px-6 pb-10">
      <div>
        <Link
          className="flex cursor-pointer items-center"
          variant="subtitle2"
          color={contentOpen.value ? 'primary' : 'inherit'}
          onClick={contentOpen.onToggle}
        >
          {contentOpen.value ? 'Hide' : 'Show'} all feature
          <div className="ml-2">
            <Iconify icon={contentOpen.value ? 'carbon:chevron-up' : 'carbon:chevron-down'} />
          </div>
        </Link>

        <Collapse unmountOnExit in={contentOpen.value}>
          <Stack spacing={2} className="pt-6">
            {plan.options.map((option) => (
              <Stack
                key={option.title}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography className={`${option.disabled && 'text-gray-400'}`} variant="body2">
                  {option.title}
                </Typography>
                <div className={`text-[#6E00FF] ${option.disabled && 'text-gray-400'}`}>
                  <Iconify icon={option.disabled ? 'carbon:close-outline' : 'carbon:checkmark'} />
                </div>
              </Stack>
            ))}
          </Stack>
        </Collapse>
      </div>

      <Button
        fullWidth
        size="large"
        variant={proLicense ? 'contained' : 'outlined'}
        color="inherit"
      >
        {startLicense && 'Start Free Trial'}
        {proLicense && 'Choose Pro'}
        {businessLicense && 'Contact Sale'}
      </Button>
    </Stack>
  );
}

Pricing02ContentMobile.propTypes = {
  plan: PropTypes.shape({
    license: PropTypes.string,
    options: PropTypes.array,
  }),
};
