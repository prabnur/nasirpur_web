import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive'
import tw from "twin.macro"; // , { styled }
import { Link } from 'gatsby';

import { ChangeLanguage, GetText } from '../utils/text/textProvider';

const BlackOutline = tw.button`
  bg-white text-black font-semibold py-1 px-3 mx-4
  hover:(bg-purple-800 text-white border-transparent) 
  rounded-lg border border-black border-3 w-40 h-12 text-lg
`; // Maybe remove the transition duration-300
const BlackOutlineModal = tw(BlackOutline)`my-3`;

export const IconButton = tw(BlackOutline)`
  bg-white 
  hover:(bg-purple-800 text-white border-transparent) mx-8
  rounded-lg border border-black border-3 z-20 h-16 w-16
`;

const Selected = tw(BlackOutline)`
  bg-black border-transparent text-white hover:bg-black
`;
const SelectedModal = tw(Selected)`my-3`;

const Language = tw(BlackOutline)`text-black hover:border-transparent hover:text-white hover:bg-black w-14 text-lg`;

export const MobileButton = tw(Language)`h-16 w-16 text-2xl mx-4`

const Contact = tw.button`
  bg-purple-700 hover:bg-purple-600 text-gray-100 font-bold py-1 px-4 text-lg
  rounded-full mx-4 hover:text-black border-4 border-black w-40 h-12 mr-8
`;
const ContactModal = tw(Contact)`my-3`;

export function LanguageSelector() {
  const changeLanguage = useContext(ChangeLanguage);
  const getText = useContext(GetText);
  const isDesktop = useMediaQuery({ minWidth: 864 });
  return <>
    {(isDesktop &&
    <Language
      onClick={changeLanguage}>
      {getText("option")}
    </Language>)}
    {(!isDesktop &&
    <MobileButton
      onClick={changeLanguage}>
      {getText("option")}
    </MobileButton>)}
  </>;   
}

export function SectionSelector({ btOption, dismissModal, link, selected }) {
  const getText = useContext(GetText);
  return (selected ?
    <Link to={link}>
      <Selected onClick={dismissModal}>
        {getText('buttonText')[btOption]}
      </Selected>
    </Link> :
    <Link to={link}>
      <BlackOutline onClick={dismissModal}>
        {getText('buttonText')[btOption]}
      </BlackOutline>
    </Link>
  );
}
export function SectionSelectorModal({ btOption, dismissModal, link, selected }) {
  const getText = useContext(GetText);
  return (selected ?
    <Link to={link}>
      <SelectedModal onClick={dismissModal}>
        {getText('buttonText')[btOption]}
      </SelectedModal>
    </Link> :
    <Link to={link}>
      <BlackOutlineModal onClick={dismissModal}>
        {getText('buttonText')[btOption]}
      </BlackOutlineModal>
    </Link>
  );
}

export function ContactUs({ link, selectMe }) {
  const getText = useContext(GetText);
  return (
    <Link to={link}>
      <Contact onClick={selectMe}>
        {getText('buttonText')['CO']}
      </Contact>
    </Link>
  );
}
export function ContactUsModal({ link, selectMe }) {
  const getText = useContext(GetText);
  return (
    <Link to={link}>
      <ContactModal onClick={selectMe}>
        {getText('buttonText')['CO']}
      </ContactModal>
    </Link>
  );
}
