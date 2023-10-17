import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'projects',
    total: 20,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    label: 'Happy clients',
    total: 32000,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    label: 'years of experience',
    total: 20,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  return (
    <Container className="py-10 md:py-20">
      <Image
        className="mb-10 rounded-2xl md:mb-20"
        alt="landing about"
        src="/assets/images/marketing/marketing_post_hero.jpg"
        ratio="16/9"
      />

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid className="text-center md:text-right" xs={12} md={5}>
          <Typography component="div" variant="overline" color="text.disabled">
            About Us
          </Typography>

          <div className="my-6">
            <Typography variant="h2">Who We Are</Typography>
          </div>

          <Typography color="text.secondary">
            In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor,
            justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.
          </Typography>

          <div className="my-10">
            <Button size="large" color="inherit" endIcon={<Iconify icon="carbon:chevron-right" />}>
              Lean more
            </Button>
          </div>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack className="w-full max-w-[100px]" spacing={1}>
                  <Stack direction="row">
                    <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" color="primary.main" typography="h4">
                      +
                    </Box>
                  </Stack>

                  <Typography variant="overline" color="text.disabled">
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
