import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyItem({ project }) {
  const { title, coverUrl, category } = project;

  return (
    <div>
      <Image className="rounded-2xl" src={coverUrl} alt={title} ratio="1/1" />

      <Stack spacing={1} className="px-5 pt-5">
        <Typography variant="overline" color="text.disabled">
          {category}
        </Typography>

        <Link component={RouterLink} href={paths.marketing.caseStudy} color="inherit">
          <TextMaxLine variant="h5" line={1}>
            {title}
          </TextMaxLine>
        </Link>
      </Stack>
    </div>
  );
}

MarketingCaseStudyItem.propTypes = {
  project: PropTypes.shape({
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    title: PropTypes.string,
  }),
};
