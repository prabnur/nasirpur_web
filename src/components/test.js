import React, { useContext } from 'react';
//import tw, { styled } from "twin.macro";

import {LanguageSelector} from './buttons';

export default function Test(props) {
    return (
    <LanguageSelector toggleLang={props.toggleLang}/>
    );
        
}
