import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:240-278-4162'>240-278-4162</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:justoon7.jc@gmail.com'>justoon7.jc@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <SocialIcons href='https://linkedin.com/in/justin-clifford'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://github.com/jrcliff'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons hreg='https://twitter.com/jrcliffdev'>
          <AiFillTwitterCircle size='3rem' />
        </SocialIcons>
        <Slogan>The future is created by what you do today</Slogan>
      </CompanyContainer>
    </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
