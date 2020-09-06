import React, { useContext } from 'react';

import { LanguageContext } from '../pages/index';
import { text } from '../utils/text/text';

export default function Test() {
    const lang = useContext(LanguageContext);
    return (
    <div>
        <h1 style={{fontSize: 42}}>{text(lang, 'option')}</h1>
        <h1>{text(lang, 'option')}</h1>
    </div>
    );
}
