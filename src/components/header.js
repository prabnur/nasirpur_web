import React from "react";
import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";

import { CloseIcon, MenuIcon } from "../utils/icons";
import useAnimatedNavToggler from  "../helpers/useAnimatedNavToggler";
import { LanguageSelector, SectionSelector } from './buttons';

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;


