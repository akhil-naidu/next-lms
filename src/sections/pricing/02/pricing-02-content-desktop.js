import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function Pricing02ContentDesktop({ plan }) {
  const startLicense = plan.license === 'Start';

  const proLicense = plan.license === 'Pro';

  const businessLicense = plan.license === 'Business';

  return (
    <Box>
      {plan.options.map((option) => (
        <Stack
          className={`h-[72px] border-b text-gray-500 ${proLicense && 'bg-[#F4F6F8]'}`}
          key={option.title}
          alignItems="center"
          justifyContent="center"
        >
          {option.disabled ? (
            '-'
          ) : (
            <Iconify icon="carbon:checkmark" width="24px" height="24px" color="primary.main" />
          )}
        </Stack>
      ))}

      <Stack className={`py-10 ${proLicense && 'rounded-b-2xl bg-[#F4F6F8]'}`}>
        <div className="mx-auto">
          <Button size="large" variant={proLicense ? 'contained' : 'outlined'} color="inherit">
            {startLicense && 'Start Free Trial'}

            {proLicense && 'Choose Pro'}

            {businessLicense && 'Contact Sale'}
          </Button>
        </div>
      </Stack>
    </Box>
  );
}

Pricing02ContentDesktop.propTypes = {
  plan: PropTypes.shape({
    license: PropTypes.string,
    options: PropTypes.array,
  }),
};
