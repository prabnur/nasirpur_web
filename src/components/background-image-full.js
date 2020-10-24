import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import tw from 'twin.macro';

const BackgroundImageFull = ({ children, fluid, fixed, title }) => (
  <div tw="w-full h-screen flex overflow-hidden mb-16 md:mb-20 xl:mb-24">
    <BackgroundImage
      fluid={fluid}
      fixed={fixed}
      backgroundColor={`#040e18`}
      title={title}
      preserveStackingContext={true}
    >
      {children}
    </BackgroundImage>
  </div>
)

export default BackgroundImageFull;

const TextHighlight = tw.div`bg-white px-4 transform -skew-x-12 float-left overflow-auto pt-4`;

export { TextHighlight }
