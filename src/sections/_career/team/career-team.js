import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CareerTeamItem from './career-team-item';

// ----------------------------------------------------------------------

export default function CareerTeam({ members }) {
  return (
    <Stack className="pt-10 md:pt-20">
      <Stack className="mx-auto mb-16 max-w-[480px] text-center md:mb-20" spacing={3}>
        <Typography variant="h2">Our Team</Typography>

        <Typography color="text.secondary">
          Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
          ante odio sit amet eros.
        </Typography>
      </Stack>

      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {members.map((member) => (
          <CareerTeamItem key={member.id} member={member} />
        ))}
      </Box>
    </Stack>
  );
}

CareerTeam.propTypes = {
  members: PropTypes.array,
};
