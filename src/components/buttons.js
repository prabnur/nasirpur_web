import React, { useContext } from 'react';
import tw from "twin.macro"; // , { styled }
import { Link } from 'gatsby';

import { ChangeLanguage, GetText } from '../utils/text/textProvider';

const BlackOutline = tw.button`
    bg-transparent  text-black font-semibold py-1 px-3 mx-4
    hover:bg-purple-800 hover:text-white hover:border-transparent 
    rounded-lg border border-black border-2 w-25 h-9
`; // Maybe remove the transition duration-300
const BlackOutlineModal = tw(BlackOutline)`my-3`;

const Selected = tw(BlackOutline)`
    bg-black border-transparent text-white hover:bg-black
`;
const SelectedModal = tw(Selected)`my-3`;

const Language = tw(BlackOutline)`bg-black border-transparent text-white hover:bg-black w-16 sm:mx-4`;// bg-indigo-900

const Contact = tw.button`
    bg-purple-700 hover:bg-purple-600 text-gray-100 font-bold py-1 px-4
    rounded-full mx-4 hover:text-black border-4 border-black w-25 h-9
`;
const ContactModal = tw(Contact)`my-3`;

export function LanguageSelector() {
    const changeLanguage = useContext(ChangeLanguage);
    const getText = useContext(GetText);
    return (
        <Language
            onClick={changeLanguage}>
            {getText("option")}
        </Language>
    );     
}

export function SectionSelector(props) {
    const getText = useContext(GetText);
    return (props.selected ?
        <Link to={props.link}>
            <Selected onClick={props.dismissModal}>
                {getText('buttonText')[props.btOption]}
            </Selected>
        </Link> :
        <Link to={props.link}>
            <BlackOutline onClick={props.dismissModal}>
                {getText('buttonText')[props.btOption]}
            </BlackOutline>
        </Link>
    );
}
export function SectionSelectorModal(props) {
    const getText = useContext(GetText);
    return (props.selected ?
        <Link to={props.link}>
            <SelectedModal onClick={props.dismissModal}>
                {getText('buttonText')[props.btOption]}
            </SelectedModal>
        </Link> :
        <Link to={props.link}>
            <BlackOutlineModal onClick={props.dismissModal}>
                {getText('buttonText')[props.btOption]}
            </BlackOutlineModal>
        </Link>
    );
}

export function ContactUs(props) {
    const getText = useContext(GetText);
    return (
        <Link to={props.link}>
            <Contact onClick={props.selectMe}>
                {getText('buttonText')['CO']}
            </Contact>
        </Link>
    );
}
export function ContactUsModal(props) {
    const getText = useContext(GetText);
    return (
        <Link to={props.link}>
            <ContactModal onClick={props.selectMe}>
                {getText('buttonText')['CO']}
            </ContactModal>
        </Link>
    );
}
