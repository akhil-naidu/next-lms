import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          imgUrl: '/assets/images/home/advertisement.jpg',
          color: alpha(theme.palette.grey[900], 0.8),
        }),
        py: { xs: 10, md: 35 },
      }}
    >
      <Stack
        className="z-18 relative p-5 text-center "
        alignItems="center"
        color="common.white"
        justifyContent="center"
      >
        <div className="opacity-30">
          <h2 className="text-6xl font-bold">Start Now</h2>
        </div>
        <div className="mb-16">
          <Typography variant="h1" component="h2">
            Create Your
            <br /> Website Today
          </Typography>
        </div>
        <Button
          size="large"
          variant="contained"
          target="_blank"
          rel="noopener"
          color="primary"
          href={paths.zoneStore}
        >
          Purchase Now
        </Button>
      </Stack>
    </Box>
  );
}
