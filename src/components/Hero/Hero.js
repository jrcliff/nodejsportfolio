import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I am a self-motivated and creative Full Stack Developer with an extensive background in the telecommunications industry.  I am seeking to combine these proven experiences in leveraging technology to build practical solutions for businesses. I bring a strong problem-solving orientation in addition to supervisory experience. I transitioned into coding to pursue my love and curiosity for technology and create amazing new tools and products that will deliver new experiences and enhance the tech industry in a meaningful way.
      </SectionText>
      <Button onClick={() => window.location = 'mailto: justoon7.jc@gmail.com'} >Contact</Button>
    </LeftSection>
  </Section>
);

export default Hero;