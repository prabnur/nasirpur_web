import React, { useContext } from 'react';
import tw, { styled } from "twin.macro"; // , { styled }
import { Link } from 'gatsby';

import { ChangeLanguage, GetText } from '../utils/text/textProvider';

const BlackOutline = styled.button(({ modal, selected }) => [
  tw`
    bg-white text-black font-semibold py-1 px-3 mx-4
    hover:(bg-purple-800 text-white border-transparent) 
    rounded-lg border border-black border-3 w-40 h-12 text-lg
  `,
  modal && tw`my-3`,
  selected && tw`bg-black border-transparent text-white hover:bg-black`
]);

export const IconButton = tw(BlackOutline)`
  bg-white 
  hover:(bg-purple-800 text-white border-transparent) mx-8
  rounded-lg border border-black border-3 z-20 h-16 w-16
`;

export const Language = styled.button(({ mobile }) => [
  tw`
    bg-white text-black font-semibold py-1 px-3 mx-4
    rounded-lg border border-black border-3 w-40 h-12 text-lg
    text-black hover:(border-transparent text-white bg-black) w-16 text-lg
  `,
  mobile && tw`h-16 w-18 text-2xl mx-4 px-4`
]);

const Contact = styled.button(({ modal }) => [
  tw`
    bg-purple-700 hover:bg-purple-600 text-gray-100 font-bold py-1 px-4 text-lg
    rounded-full mx-4 hover:text-black border-4 border-black w-40 h-12 mr-8
  `,
  modal && tw`my-3`
]);

export function LanguageSelector({ isDesktop }) {
  const changeLanguage = useContext(ChangeLanguage);
  const getText = useContext(GetText);
  return (
    <Language
      mobile={!isDesktop}
      onClick={changeLanguage}>
      {getText("option")}
    </Language>
    )   
}

export function SectionSelector({ btOption, dismissModal, link, modal, selected }) {
  const getText = useContext(GetText);
  return(
    <Link to={link}>
      <BlackOutline modal={modal} selected={selected} onClick={dismissModal}>
        {getText('buttonText')[btOption]}
      </BlackOutline>
    </Link>
  );
}

export function ContactUs({ modal, onClick }) {
  const getText = useContext(GetText);
  return (
    <Contact modal={modal} onClick={onClick}>
      {getText('buttonText')['CO']}
    </Contact>
  );
}
