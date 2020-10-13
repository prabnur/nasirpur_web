import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'gatsby-image';
import tw, { styled } from "twin.macro";

import { mobileBreakpoint } from '../utils/breakpoint';

const Container = styled.div(({ mobile }) => [
  tw`h-85vh relative mx-auto w-10/12`,
  mobile ? tw`my-20` : tw`my-32`
]);

const ImageContainer = styled.span(({ left, right, mobile }) => [
  tw`absolute w-6/12 h-auto`,
  left && tw`inset-y-0 left-0`,
  right && tw`inset-y-0 right-0`,
  mobile && tw`inset-x-0 top-0`
]);

const TextBox = styled.span(({ left, right, mobile }) => [
  tw`absolute p-10`,
  left && tw`inset-y-0 left-0`,
  right && tw`inset-y-0 right-0`,
  mobile && tw`inset-x-0 bottom-0`
]);

const PictureWithText = ({ fluid }) => {
  const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });
  return (
  <Container mobile={isMobile}>
    <ImageContainer left mobile={isMobile}>
      <Image tw="rounded-comfy" fluid={fluid}/>
    </ImageContainer>
    <TextBox right mobile={isMobile}>Hello</TextBox>
  </Container>
);}

const TextWithPicture = ({ fluid }) => {
  const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });
  return (
  <Container mobile={isMobile}>
    <TextBox left mobile={isMobile}>Hello</TextBox>
    <ImageContainer right mobile={isMobile}>
      <Image tw="rounded-comfy" fluid={fluid}/>
    </ImageContainer>
  </Container>
);}

export { PictureWithText, TextWithPicture };
