import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import tw from 'twin.macro';

const BackgroundImageFull = ({ children, fluid, fixed, title }) => (
  <div tw="w-full h-screen flex overflow-hidden mb-8">
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
