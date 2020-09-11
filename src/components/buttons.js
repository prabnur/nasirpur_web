import React, { useContext } from 'react';
import tw from "twin.macro"; // , { styled }
import { Link } from 'gatsby';

import { LanguageContext } from '../pages/index';

const BlackOutline = tw.button`
    bg-transparent  text-black font-semibold py-2 px-3 mx-4
    hover:bg-purple-800 hover:text-white hover:border-transparent 
    rounded-lg border border-black border-2
`; // Maybe remove the transition duration-300
const BlackOutlineModal = tw(BlackOutline)`my-3`;

const Selected = tw(BlackOutline)`
    bg-black border-transparent text-white hover:bg-black
`;
const SelectedModal = tw(Selected)`my-3`;

const Language = tw(BlackOutline)`bg-black border-transparent text-white hover:bg-black sm:mx-4`;// bg-indigo-900

const Contact = tw.button`
    bg-purple-700 hover:bg-purple-600 text-gray-100 font-bold py-2 px-4
    rounded-full mx-4 hover:text-black border-4 border-black
`;
const ContactModal = tw(Contact)`my-3`;

export function LanguageSelector(props) {
    const langContext = useContext(LanguageContext);
    return (
    <Language
        onClick={() => props.toggleLang(langContext)}>
        {langContext === 'en' ? 'EN' : 'ਪੰਬ'}
    </Language>
    );     
}

export function SectionSelector(props) {
    return (props.selected ?
    <Link to={props.link}><Selected onClick={props.dismissModal}>{props.text}</Selected></Link> :
    <Link to={props.link}><BlackOutline onClick={props.dismissModal}>{props.text}</BlackOutline></Link>
    );
}
export function SectionSelectorModal(props) {
    return (props.selected ?
    <Link to={props.link}><SelectedModal onClick={props.dismissModal}>{props.text}</SelectedModal></Link> :
    <Link to={props.link}><BlackOutlineModal onClick={props.dismissModal}>{props.text}</BlackOutlineModal></Link>
    );
}

export const ContactUs = (props) => <Link to={props.link}><Contact onClick={props.selectMe}>Contact Us</Contact></Link>;
export const ContactUsModal = (props) => <Link to={props.link}><ContactModal onClick={props.selectMe}>Contact Us</ContactModal></Link>;
