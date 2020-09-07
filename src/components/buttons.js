import React, { useContext } from 'react';
import tw from "twin.macro"; // , { styled }

import { LanguageContext } from '../pages/index';

export const BlackButton = tw.button`
bg-transparent  text-black font-semibold py-2 px-2
hover:bg-black hover:text-white hover:border-transparent 
border border-black rounded
`
export function LanguageSelector(props) {
    const langContext = useContext(LanguageContext);
    return (
    <BlackButton
        onClick={() => props.toggleLang(langContext)}>
        {langContext === 'en' ? 'EN' : 'ਪੰਬ'}
    </BlackButton>
    );     
}