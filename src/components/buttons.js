import React, { useContext } from 'react';
import tw from "twin.macro"; // , { styled }

import { LanguageContext } from '../pages/index';

const BlackOutline = tw.button`
    bg-transparent  text-black font-semibold py-2 px-3
    hover:bg-purple-800 hover:text-white hover:border-transparent 
    border border-black rounded-lg border-2
`;

const Selected = tw(BlackOutline)`
    bg-black border-transparent text-white hover:bg-black
`;

const Language = tw(BlackOutline)`hover:bg-indigo-900 border`;

const Contact = tw.button`bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full`;

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
    <Selected onClick={props.onclick}>{props.text}</Selected> :
    <BlackOutline onClick={props.onclick}>{props.text}</BlackOutline>
    );
}

export function ContactUsButton(props) {
    return <Contact>Contact Us</Contact>
}
