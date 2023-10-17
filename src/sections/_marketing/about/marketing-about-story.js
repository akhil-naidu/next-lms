import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    year: '2021',
    title: 'Customer Satisfaction',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    year: '2020',
    title: 'Transparency',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    year: '2019',
    title: 'Reputation',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    year: '2018',
    title: 'Cooperation',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'];

// ----------------------------------------------------------------------

export default function MarketingAboutStory() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box className="py-20 md:py-32" bgcolor="background.neutral">
      <Container>
        <Stack className="mx-auto mb-16 max-w-[480px] text-center md:mb-20" spacing={3}>
          <Typography variant="h2">Our Story</Typography>

          <Typography color="text.secondary">
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
          </Typography>
        </Stack>

        <Timeline position={mdUp ? 'alternate' : 'right'}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              className={`${mdUp ? 'before:block' : 'before:hidden'}`}
              key={value.title}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                  {value.year}
                </Typography>
                <div className="mb-2 mt-1">
                  <Typography variant="h6">{value.title}</Typography>
                </div>
                <div className={`max-w-[360px] text-gray-500 ${index % 2 && 'ml-auto'} text-sm`}>
                  {value.description}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
