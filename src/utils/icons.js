import React from 'react';
import tw from "twin.macro";

// Source: https://heroicons.com/

const Icon = tw.svg`w-8 h-8`;
const viewBox = "1 3 18 18";

export const CloseIcon = () => 
<Icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={viewBox} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</Icon>;

export const MenuIcon = () => 
<Icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={viewBox} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</Icon>;

// Source: https://iconmonstr.com/check-mark-5-svg/
// width="24" height="24"
export const CheckMarkBullet = () =>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tw="w-7 h-7 m-0 inline flex fill-current text-green-700">
  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/>
</svg>;
