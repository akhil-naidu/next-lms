import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';
import { varFade, MotionViewport } from 'src/components/animate';
import Pattern01 from 'src/assets/illustrations/pattern/pattern-01';

// ----------------------------------------------------------------------

const CONTENTS = [
  {
    question: `What's in the product packages?`,
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
  {
    question: 'How can I upgrade my product plan?',
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
  {
    question: 'Are design assets (Figma, Sketch, Adobe XD) included?',
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
  {
    question: 'Does this product support TypeScript?',
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
  {
    question: 'Can I use this template in commercial projects like a SaaS?',
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
  {
    question: 'How can I request support?',
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
];

// ----------------------------------------------------------------------

export default function HomeFAQs() {
  const smUp = useResponsive('up', 'sm');

  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <Container className="relative py-10 md:py-20" component={MotionViewport}>
      <Grid container spacing={{ md: 3 }} justifyContent="center">
        <Grid xs={12} md={8}>
          <m.div className="text-center" variants={varFade().in}>
            <Typography variant="h2">Frequently Asked Questions</Typography>
          </m.div>

          <Box className="my-16 md:my-20">
            {CONTENTS.map((faq) => (
              <m.div key={faq.question} variants={varFade().in}>
                <Accordion
                  expanded={expanded === faq.question}
                  onChange={handleChangeExpanded(faq.question)}
                >
                  <AccordionSummary
                    sx={{
                      minHeight: 64,
                      borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
                      [`& .${accordionSummaryClasses.content}`]: {
                        p: 0,
                        m: 0,
                      },
                      [`&.${accordionSummaryClasses.expanded}`]: {
                        bgcolor: 'action.selected',
                      },
                    }}
                  >
                    <Typography variant="h6" className="flex-grow">
                      {faq.question}
                    </Typography>

                    <Iconify
                      width={24}
                      icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                    />
                  </AccordionSummary>

                  <AccordionDetails>{faq.answer}</AccordionDetails>
                </Accordion>
              </m.div>
            ))}
          </Box>

          <Box className="rounded-3xl border-2 bg-gray-400 bg-opacity-5 px-6 py-12 text-center outline-dashed md:px-16 md:py-16">
            <m.div variants={varFade().inUp}>
              <Typography variant="h3">Still Have Questions?</Typography>
            </m.div>

            <m.div className="mb-10 mt-6 " variants={varFade().inUp}>
              <Typography color="text.secondary">
                Please describe your case to receive the most accurate advice.
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Button
                size="large"
                color="inherit"
                variant="contained"
                href="mailto:support@minimals.cc?subject=[Feedback] from Customer"
              >
                Contact us
              </Button>
            </m.div>
          </Box>
        </Grid>
      </Grid>

      {smUp && (
        <Pattern01 className="left-0 right-0 top-80 z-[-1] mx-auto max-h-[600px] max-w-[600px]" />
      )}
    </Container>
  );
}
