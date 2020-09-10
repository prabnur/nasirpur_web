import React from 'react';
import tw from "twin.macro";

// Source: https://heroicons.com/

const Icon = tw.svg`w-8 h-8 mx-5`;

export const CloseIcon = () => 
<Icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</Icon>;

export const MenuIcon = () => 
<Icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</Icon>;
