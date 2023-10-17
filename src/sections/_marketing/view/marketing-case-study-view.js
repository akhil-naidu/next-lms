'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import Markdown from 'src/components/markdown';
import { _caseStudies, _testimonials } from 'src/_mock';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import MarketingNewsletter from '../marketing-newsletter';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import MarketingCaseStudyListSimilar from '../list/marketing-case-study-list-similar';
import MarketingCaseStudyDetailsGallery from '../details/marketing-case-study-details-gallery';
import MarketingCaseStudyDetailsSummary from '../details/marketing-case-study-details-summary';

// ----------------------------------------------------------------------

const _mockCaseStudy = _caseStudies[0];

export default function MarketingCaseStudyView() {
  return (
    <>
      <Container className="overflow-hidden pb-20 pt-10 md:pb-28">
        <Image alt="hero" src={_mockCaseStudy.heroUrl} ratio="16/9" className="rounded-2xl" />

        <div className="my-10">
          <CustomBreadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Case Studies', href: paths.marketing.caseStudies },
              { name: _mockCaseStudy.title },
            ]}
          />
        </div>

        <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: 'row-reverse' }}>
          <Grid xs={12} md={4}>
            <MarketingCaseStudyDetailsSummary caseStudy={_caseStudies[0]} />
          </Grid>

          <Grid xs={12} md={8}>
            <Markdown content={_mockCaseStudy.content} />
            <MarketingCaseStudyDetailsGallery images={_mockCaseStudy.galleryImgs} />
          </Grid>
        </Grid>
      </Container>

      <MarketingTestimonial testimonials={_testimonials} />

      <MarketingCaseStudyListSimilar caseStudies={_caseStudies.slice(0, 3)} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
