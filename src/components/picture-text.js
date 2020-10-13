import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import tw, { styled } from 'twin.macro';

const Card = styled.div(({ reversed }) => [
  tw`mt-32 md:flex justify-center items-center`,
  reversed ? tw`flex-row-reverse` : tw`flex-row`
]);

const Image = tw(BackgroundImage)`
  rounded md:w-7/12 lg:w-6/12 xl:w-5/12 md:h-144
  h-80 flex-shrink-0 bg-cover bg-center
  mx-4 sm:mx-8 md:mx-4 lg:mx-8
`;

const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Title = tw.h3`text-3xl font-bold text-gray-900`;
const Subtitle = styled.div(({ om, tm }) => [
  tw`font-bold tracking-wide text-xl`,
  om && tw`text-green-900`,
  tm && tw`text-purple-700`,
]);
const Description = tw.p`mt-2 text-xl leading-loose`;

export default ({ key, reversed, card}) => (
  <Card key={key} reversed={reversed} card={card}>
    <Image fluid={card.fluid} />
    <Details>
      <Title>{card.title}</Title>
      <Subtitle tm>{card.subtitleTM}</Subtitle>
      <Description>{card.descriptionTM}</Description>
      <Subtitle om>{card.subtitleOM}</Subtitle>
      <Description>{card.descriptionOM}</Description>
    </Details>
  </Card>
)
