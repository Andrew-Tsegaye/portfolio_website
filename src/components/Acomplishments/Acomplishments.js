import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: 2,
    text: "Reviewed AI research papers on IEEE Big Data Mining & Analytics Journals",
  },
  { number: 1, text: "Gold Medal for Excelling in 1st year exam result" },
  { number: 90, text: "Completed ML Internship with Python" },
  {
    number: 87,
    text: "Completed Bachelor degree in the 1st Class with Distinction",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
