const Typography = require("typography");
const irvingTheme = require('typography-theme-irving');

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
const TypographyGen = Typography(irvingTheme)

const writeFile = require('fs').writeFile;
writeFile('./src/utils/typography/typography.css', TypographyGen.createStyles(), (err) => {if(err) console.log(err)});
console.log('Typography Updated')
