// @ts-checkn
import React from "react";
import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";

import { CloseIcon, MenuIcon } from "../utils/icons";
import useAnimatedNavToggler from  "../helpers/useAnimatedNavToggler";
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

export default ({ collapseBreakpointClass = "lg", toggleLang, section }) => {
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
    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  
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

  // Motion Framer + Icons

  /* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
    sm: {
      mobileNavLinks: tw`sm:hidden`,
      desktopNavLinks: tw`sm:flex`,
      mobileNavLinksContainer: tw`sm:hidden`
    },
    md: {
      mobileNavLinks: tw`md:hidden`,
      desktopNavLinks: tw`md:flex`,
      mobileNavLinksContainer: tw`md:hidden`
    },
    lg: {
      mobileNavLinks: tw`lg:hidden`,
      desktopNavLinks: tw`lg:flex`,
      mobileNavLinksContainer: tw`lg:hidden`
    },
    xl: {
      mobileNavLinks: tw`lg:hidden`,
      desktopNavLinks: tw`lg:flex`,
      mobileNavLinksContainer: tw`lg:hidden`
    }
};

