// @ts-checkn
import React from "react";
import { useMediaQuery } from 'react-responsive'
import tw from "twin.macro";

import { CloseIcon, MenuIcon } from "../utils/icons";
import { ContactUs, LanguageSelector, SectionSelector } from './buttons';

const Header = tw.header`
  flex justify-between items-center
  max-w-full mx-auto pt-4
`;

// inline-flex
const Horizontal = tw.span`inline-flex`;

// hidden lg:flex flex-1 justify-between items-center
const DesktopNavLinks = tw.nav`
  lg:flex flex-1 justify-between items-center
`;

export default ({ toggleLang, section }) => {
    const sectionSelectors = [
      <SectionSelector
        text='About Me'
        link='/aboutMe/'
        selected={section === 'About Me'}
      />,
      <SectionSelector
        text='Drip Irrigation'
        link='/dripIrrigation/'
        selected={section === 'Drip Irrigation'}
      />,
      <SectionSelector
        text='Tissue Culture'
        link='/tissueCulture/'
        selected={section === 'Tissue Culture'}
      />
    ];
    const langSelector = <LanguageSelector toggleLang={toggleLang}/>;
    const contactUs = <ContactUs link='/contactUs/' key={2}/>;
    
    return (
      <Header >
        <DesktopNavLinks>
          {langSelector}
          <Horizontal key={1}>{sectionSelectors}</Horizontal>
          {contactUs}
        </DesktopNavLinks>
      </Header>
    );
  };
