// import { useContext } from 'react';

//import LanguageContext from '../containers/language'
//const languageContext = useContext(LanguageContext);

import Typography from "typography";
import irvingTheme from 'typography-theme-irving';


// Use Exo2 instead of Exo
irvingTheme.googleFonts = [
    {
      name: "Exo 2",
      styles: ["700"],
    },
    {
      name: "Yrsa",
      styles: ["400", "700"],
    },
]
irvingTheme.headerFontFamily = ["Exo 2", "sans-serif"]
irvingTheme.scaleRatio = 5;
export default Typography(irvingTheme)

/*
class TypographyProvider {
    constructor() {
        this.typographies = {};

        // EN
        const en = irvingTheme;
        // Use Exo2 instead of Exo
        en.googleFonts = [
            {
              name: "Exo 2",
              styles: ["700"],
            },
            {
              name: "Yrsa",
              styles: ["400", "700"],
            },
        ]
        en.headerFontFamily = ["Exo 2", "sans-serif"]
        this.typographies['en'] = new Typography(en);
        
        // PB
        const pb = irvingTheme;
        pb.googleFonts = [{
            name: "Mukta Mahee",
            styles: [400, 500, 700]
        }]
        pb.headerFontFamily = ["Mukta Mahee", "sans-serif"]
        pb.bodyFontFamily = ["Mukta Mahee", "sans-serif"]
        pb.headerWeight = 500;
        pb.bodyWeight = 400;
        this.typographies['pb'] = new Typography(pb);
    }

    getTypography(languageCode) {
        return this.typographies[languageCode];
    }
}
*/
