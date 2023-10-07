'use client';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { _mock } from 'src/_mock';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import Player, { PlayerDialog } from 'src/components/player';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export default function PlayerView() {
  const videoOpen = useBoolean();

  return (
    <>
      <Box
        sx={{
          py: 5,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Player"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Player' },
            ]}
            moreLink={['https://www.npmjs.com/package/react-player']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Box gap={3} display="grid" gridTemplateColumns="repeat(2, 1fr)">
          <Player controls url={_mock.video(0)} />

          <Stack alignItems="center" justifyContent="center">
            <Fab color="primary" variant="extended" onClick={videoOpen.onTrue}>
              <Iconify icon="carbon:play" width={24} />
              Open with Dialog
            </Fab>
          </Stack>
        </Box>
      </Container>

      <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} />
    </>
  );
}
