'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import FormProvider, { RHFCode } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function VerifyView() {
  const VerifySchema = Yup.object().shape({
    code: Yup.string().min(6, 'Code must be at least 6 characters').required('Code is required'),
  });

  const defaultValues = {
    code: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifySchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      <Image
        className="mx-auto mb-10 h-24 w-24"
        alt="email inbox"
        src="/assets/icons/ic_email_inbox.svg"
      />

      <Typography variant="h3">Check Your Email</Typography>
      <div className="mb-10 mt-4">
        <p className="text-sm text-gray-500">
          {' '}
          We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below
          box to verify your email.
        </p>
      </div>

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack spacing={3}>
          <RHFCode name="code" />

          <div className="mt-6">
            <LoadingButton
              fullWidth
              size="large"
              color="inherit"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Verify
            </LoadingButton>
          </div>
        </Stack>
      </FormProvider>
      <div className="mt-6 text-center">
        <span className="text-sm"> {`Don’t have a code? `}</span>
        <Link variant="subtitle2" underline="none">
          Resend code
        </Link>
      </div>

      <div className="mx-auto mt-6 inline-flex items-center">
        <Iconify icon="carbon:chevron-left" width={16} className="mr-2" />
        <Link component={RouterLink} href={paths.loginCover} color="inherit" variant="subtitle2">
          Return to sign in
        </Link>
      </div>
    </>
  );
}
