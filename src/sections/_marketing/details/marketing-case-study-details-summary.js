import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { _socials } from 'src/_mock';
import Iconify from 'src/components/iconify';
import { fDate } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyDetailsSummary({ caseStudy }) {
  const { title, description, category, website, createdAt } = caseStudy;

  return (
    <Stack spacing={3} className='p-10 rounded-xl' bgcolor= 'background.neutral'>
      <Stack spacing={2}>
        <Typography variant="overline" color= 'text.disabled'>
          summary
        </Typography>

        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2">{description}</Typography>
      </Stack>

      <div className='border border-dashed'/>

      <Stack spacing={1}>
        <Typography variant="overline"  color='text.disabled' >
          Website
        </Typography>

        <Link variant="body2" color="inherit">
          {website}
        </Link>
       <div className='text-gray-400 pt-2'>
       <Typography variant="overline">
          Category
        </Typography>
       </div>


       <div className='pb-2'>
       <Typography variant="body2">
          {category}
        </Typography>
       </div>

        <Typography variant="overline" color= 'text.disabled'>
          Date
        </Typography>

        <Typography variant="body2">{fDate(createdAt)}</Typography>
      </Stack>

      <div className='border  border-dashed'  />

      <Stack direction="row" alignItems="center" spacing={0.5}>
        <Typography variant="subtitle2">Share:</Typography>

        <Stack direction="row">
          {_socials.map((social) => (
            <IconButton key={social.value}>
              <Iconify icon={social.icon}  sx={{ color: social.color }} />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

MarketingCaseStudyDetailsSummary.propTypes = {
  caseStudy: PropTypes.shape({
    title: PropTypes.string,
    website: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
  }),
};
