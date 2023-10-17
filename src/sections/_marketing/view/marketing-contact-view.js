'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MarketingNewsletter from '../marketing-newsletter';
import MarketingContactInfo from '../contact/marketing-contact-info';
import MarketingContactForm from '../contact/marketing-contact-form';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

export default function MarketingContactView() {
  return (
    <>
      <Container className="pb-20 pt-10 md:pb-28 md:pt-20">
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          justifyContent="space-between"
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          <Grid xs={12} md={6} lg={5}>
            <MarketingContactInfo />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <div className="mb-10">
              <Typography variant="h3">Ready To Get Started?</Typography>
            </div>

            <MarketingContactForm />
          </Grid>
        </Grid>
      </Container>

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
