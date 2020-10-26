import React from 'react';
import tw from 'twin.macro';

import { CheckMarkBullet } from '../utils/icons';
import { Card, Image } from './card';

const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Title = tw.h2`font-bold text-gray-900`;
const Point = tw.div` flex content-center items-start my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12`;
const Description = tw.span`ml-4 text-2xl flex-wrap leading-relaxed inline w-11/12`;

export default ({ reversed, card}) => (
  <Card reversed={reversed} card={card}>
    <Image fluid={card.fluid} />
    <Details>
      <Title>{card.title}</Title>
      <div tw="mt-12">
        {card.bullets.map((desc, idx) =>
          <Point key={idx}>
            <span tw="w-1/12"><CheckMarkBullet/></span>
            <Description>{desc}</Description>
          </Point>
        )}
      </div>
    </Details>
  </Card>
)
