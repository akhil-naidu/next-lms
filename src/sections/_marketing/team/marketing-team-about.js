import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MarketingTeamItem from './marketing-team-item';

// ----------------------------------------------------------------------

export default function MarketingTeamAbout({ members }) {
  return (
    <Container className="py-20 md:py-32">
      <Typography variant="h2" className="text-center">
        Great Team Is The Key
      </Typography>

      <div className="mx-auto mb-16 mt-6 max-w-[480px] text-center text-gray-500 md:mb-20">
        Since wire-frame renderings are relatively simple and fast to calculate, they are often used
        in cases
      </div>

      <Box className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-4 md:gap-y-10">
        {members.map((member) => (
          <MarketingTeamItem key={member.id} member={member} />
        ))}
      </Box>
    </Container>
  );
}

MarketingTeamAbout.propTypes = {
  members: PropTypes.array,
};
