import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function MarketingAboutOurClients({ brands }) {
  return (
    <Container className="md:pb-22 pb-14">
      <Stack alignItems="center" spacing={5}>
        <Typography variant="h2">Our Clients</Typography>

        <Stack
          className="max-w-[680px] overflow-hidden"
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          {brands.slice(0, 8).map((brand) => (
            <Box key={brand.id}>
              <Image
                className="mx-4 my-5 h-[32px] md:mx-8 md:my-8"
                alt={brand.name}
                src={brand.image}
              />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

MarketingAboutOurClients.propTypes = {
  brands: PropTypes.array,
};
