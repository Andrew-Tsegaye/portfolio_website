import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio website
        </SectionTitle>
        <SectionText>
          I am a Junior Data Scientist | AI Engineer with a strong exposure to
          Python and Machine Learning. I have worked on massive datasets
          applying machine learning algorithms. Therefore, I am ready to join a
          data science team who are working on data analysis or any AI complex
          projects.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
