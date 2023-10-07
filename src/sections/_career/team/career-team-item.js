import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, styled } from '@mui/material/styles';

import { _socials } from 'src/_mock';
import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: alpha(theme.palette.grey[900], 0.88),
    endColor: alpha(theme.palette.grey[900], 0.88),
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  '&:hover': { opacity: 1 },
}));

// ----------------------------------------------------------------------

export default function CareerTeamItem({ member }) {
  return (
    <Box className="relative">
      <StyledOverlay>
        <Stack
          className="z-18 absolute bottom-0 top-0 w-full text-white"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6">{member.name}</Typography>

          <Typography variant="body2" className="pb-2 opacity-5">
            {member.role}
          </Typography>

          <Stack direction="row">
            {_socials.map((social) => (
              <IconButton key={social.value} color="primary">
                <Iconify icon={social.icon} />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </StyledOverlay>

      <Image src={member.photo} alt={member.name} ratio="1/1" />
    </Box>
  );
}

CareerTeamItem.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    role: PropTypes.string,
  }),
};