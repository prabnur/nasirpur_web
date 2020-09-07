import React, { useContext } from 'react';
import tw from "twin.macro"; // , { styled }

import { LanguageContext } from '../pages/index';

const BlackOutlineButton = tw.button`
    bg-transparent  text-black font-semibold py-2 px-2
    hover:bg-purple-800 hover:text-white hover:border-transparent 
    border border-black rounded-lg border-2
`;

const SelectedButton = tw(BlackOutlineButton)`
    bg-black border-transparent text-white hover:bg-black
`;

const LanguageButton = tw(BlackOutlineButton)`hover:bg-indigo-900 border`;

export function LanguageSelector(props) {
    const langContext = useContext(LanguageContext);
    return (
    <LanguageButton
        onClick={() => props.toggleLang(langContext)}>
        {langContext === 'en' ? 'EN' : 'ਪੰਬ'}
    </LanguageButton>
    );     
}

export function SectionSelector(props) {
    return (props.selected ?
    <SelectedButton onClick={props.onclick}>{props.text}</SelectedButton> :
    <BlackOutlineButton onClick={props.onclick}>{props.text}</BlackOutlineButton>
    );
}