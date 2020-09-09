import React, { useContext } from 'react';
import tw from "twin.macro"; // , { styled }
import { Link } from 'gatsby';

import { LanguageContext } from '../pages/index';

const BlackOutline = tw.button`
    bg-transparent  text-black font-semibold py-2 px-3
    hover:bg-purple-800 hover:text-white hover:border-transparent 
    border border-black rounded-lg border-2 transition duration-300
`; // Maybe remove the transition duration-300

const Selected = tw(BlackOutline)`
    bg-black border-transparent text-white hover:bg-black
`;

const Language = tw(BlackOutline)`hover:bg-black border`;// bg-indigo-900

const Contact = tw.button`
    bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4
    rounded-full hocus:text-gray-200 focus:shadow-outline
`;

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
    <Link to={props.link}><Selected onClick={props.selectMe}>{props.text}</Selected></Link> :
    <Link to={props.link}><BlackOutline onClick={props.selectMe}>{props.text}</BlackOutline></Link>
    );
}
export const ContactUsButton = (props) => <Link to={props.link}><Contact onClick={props.selectMe}>Contact Us</Contact></Link>;
