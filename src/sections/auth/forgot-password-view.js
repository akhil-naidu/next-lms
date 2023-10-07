'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ForgotPasswordView() {
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const defaultValues = {
    email: '',
  };

  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      <Image
        className="mx-auto mb-10 h-24 w-24"
        alt="reset password"
        src="/assets/icons/ic_lock_password.svg"
      />

      <Typography variant="h3" paragraph>
        Forgot Your Password?
      </Typography>

      <div className="mb-10">
        <p className="text-sm text-gray-500">
          {' '}
          Please enter the email address associated with your account and We will email you a link
          to reset your password.
        </p>
      </div>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFTextField name="email" hiddenLabel placeholder="Email address" />

        <div className="mt-5">
          <LoadingButton
            fullWidth
            size="large"
            color="inherit"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Reset Password
          </LoadingButton>
        </div>
      </FormProvider>
      <div className="mx-auto mt-6 inline-flex items-center">
        <Iconify icon="carbon:chevron-left" width={16} className="mr-2" />
        <Link component={RouterLink} href={paths.loginCover} color="inherit" variant="subtitle2">
          Return to sign in
        </Link>
      </div>
    </>
  );
}
