import en from './en.json';
import pb from './pb.json';

export const languageNames = {
  'en': 'English',
  'pb': 'ਪੰਜਾਬੀ',
};

const languageText = {
  'en': en,
  'pb': pb
}

export function text (language, key) {
  return languageText[language][key];
}
