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

const MobileNavLinksContainer = tw.nav`flex flex-1 items-start justify-between`;
const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hover:text-primary-500 transition duration-300
`;

// inline-flex
const Horizontal = tw.div`inline-flex`;
const Vertical = tw.div`block`;

/*
const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-4 border
    text-center rounded-lg text-gray-900 bg-white`}
  ${Horizontal} {
    ${tw`items-center mx-0`}
  }
`);
*/
const Card = motion.custom(tw.div`
    md:hidden z-10 max-w-xs rounded overflow-hidden shadow-2xl w-1/2 content-between
`);

// hidden lg:flex flex-1 justify-between items-center
const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
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
    const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
  
    return (
      <Header >
        <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
          {langSelector}
          <Horizontal key={1}>{sectionSelectors}</Horizontal>
          {contactUs}
        </DesktopNavLinks>
  
        <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
          {langSelector}

          <Card initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
            <Vertical key={1}>
              {sectionSelectors}
              {contactUs}
            </Vertical>
          </Card>

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

