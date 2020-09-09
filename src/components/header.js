// @ts-checkn
import React from "react";
import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";

import { CloseIcon, MenuIcon } from "../utils/icons";
import useAnimatedNavToggler from  "../helpers/useAnimatedNavToggler";
import { ContactUsButton, LanguageSelector, SectionSelector } from './buttons';

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto pt-2
`;

const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;

const SectionSelectors = tw.div`inline-flex`;

const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${SectionSelectors} {
    ${tw`flex flex-col items-center`}
  }
`);

// hidden lg:flex flex-1 justify-between items-center
const DesktopNavLinks = tw.nav`
hidden lg:flex flex-1 justify-between items-center
`;

export default ({ collapseBreakpointClass = "lg", toggleLang, section }) => {
    const sectionSelectors = 
      <SectionSelectors key={1}>
        <SectionSelector
          text='About Me'
          link='/aboutMe/'
          selected={section === 'About Me'}
        />
        <SectionSelector
          text='Drip Irrigation'
          link='/dripIrrigation/'
          selected={section === 'Drip Irrigation'}
        />
        <SectionSelector
          text='Tissue Culture'
          link='/tissueCulture/'
          selected={section === 'Tissue Culture'}
        />
      </SectionSelectors>;
    const langSelector = <LanguageSelector toggleLang={toggleLang}/>;
    const contactUs = <ContactUsButton link='/contactUs/' key={2}/>;

    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
    const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
  
    return (
      <Header >
        <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
          {langSelector}
          {sectionSelectors}
          {contactUs}
        </DesktopNavLinks>
  
        <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
          {langSelector}
          <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
            {sectionSelectors}
            {contactUs}
          </MobileNavLinks>
          <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
            {showNavLinks ? <CloseIcon/> : <MenuIcon/>}
          </NavToggle>
        </MobileNavLinksContainer>
      </Header>
    );
  };

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
