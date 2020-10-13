import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'gatsby-image';
import tw, { styled } from "twin.macro";

const Container = styled.div(({ mobile }) => [
  tw`h-85vh relative mx-auto w-10/12`,
  mobile ? tw`my-20` : tw`my-32`
]);

const ImageContainer = styled.span(({ left, right, mobile }) => [
  tw`absolute inset-y-0 w-6/12 h-auto`,
  left && tw`left-0`,
  right && tw`right-0`
]);

const TextBox = styled.span(({ left, right, mobile }) => [
  tw`absolute inset-y-0 p-10`,
  left && tw`left-0`,
  right && tw`right-0`
]);

const PictureWithText = ({ fluid }) => (
  <Container>
    <ImageContainer left>
      <Image tw="rounded-comfy" fluid={fluid}/>
    </ImageContainer>
    <TextBox right>Hello</TextBox>
  </Container>
)

const TextWithPicture = ({ fluid }) => (
  <Container>
    <TextBox left>Hello</TextBox>
    <ImageContainer right>
      <Image tw="rounded-comfy" fluid={fluid}/>
    </ImageContainer>
  </Container>
)

export { PictureWithText, TextWithPicture };
