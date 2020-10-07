import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import tw from 'twin.macro';

const BackgroundImageFull = ({ children, data, title }) => (
  <div tw="w-full h-screen flex overflow-hidden">
    <BackgroundImage
      fluid={data.file.childImageSharp.fluid}
      backgroundColor={`#040e18`}
      title={title}
      preserveStackingContext={true}
    >
      {children}
    </BackgroundImage>
  </div>
)

export default BackgroundImageFull;
