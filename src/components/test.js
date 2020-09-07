import React, {useContext} from 'react';

import { LanguageContext } from '../pages/index';
//import { text } from '../utils/text/text';

export default function Test(props) {
    const langContext = useContext(LanguageContext);
    console.log("Rendering Test");
    return (
            <button
                onClick={() => props.toggleLang(langContext)}>
                {langContext === 'en' ? 'EN' : 'ਪੰਬ'}
            </button>
    );
        
}
