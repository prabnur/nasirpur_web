import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'gatsby-image';
import tw, { styled } from "twin.macro";

const Container = styled.div(({ mobile }) => [
  tw`relative mx-auto`,
  mobile ? tw`w-8/12 my-20 h-69vh` : tw`w-9/12 my-32 h-85vh`
]);

const ImageBox = styled.span(({ left, right, mobile }) => [
  tw`absolute inset-y-0`,
  !mobile && left && tw`left-0`,
  !mobile && right && tw`right-0`,
  !mobile && tw`w-6/12`,
  mobile && tw`w-full block`
]);

const TextBox = styled.span(({ left, right, mobile }) => [
  tw`absolute w-6/12 justify-start pt-12`,
  !mobile && left && tw`inset-y-0 left-0 pr-12`,
  !mobile && right && tw`inset-y-0 right-0 pl-12`,
  !mobile && tw`w-6/12 `,
  mobile && tw`block inset-x-0 bottom-0`
]);

const Card = ({ title, body }) => (<>
  <h2 tw="block font-bold mb-10">{title}</h2>
  <h3 tw="block">{body[0]}</h3>
  <p tw="block text-1.5xl">{body[1]}</p>
  <h3 tw="block">{body[2]}</h3>
  <p tw="block text-1.5xl">{body[3]}</p>
</>);

const breakpoint = 500;

const PictureWithText = ({ fluid, title, body }) => {
  const isMobile = useMediaQuery({ maxWidth: breakpoint });
  return (
  <Container mobile={isMobile}>
    <ImageBox left mobile={isMobile}>
      <Image tw="rounded" fluid={fluid}/>
    </ImageBox>
    <TextBox right mobile={isMobile}>
      <Card title={title} body={body}/>
    </TextBox>
  </Container>
);}

const TextWithPicture = ({ fluid, title, body }) => {
  const isMobile = useMediaQuery({ maxWidth: breakpoint });
  return (
  <Container mobile={isMobile}>
    <TextBox left mobile={isMobile}>
      <Card title={title} body={body}/>
    </TextBox>
    <ImageBox right mobile={isMobile}>
      <Image tw="rounded" fluid={fluid}/>
    </ImageBox>
  </Container>
);}

export { PictureWithText, TextWithPicture };
