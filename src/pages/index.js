import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import tw from 'twin.macro';

import { GetText } from '../utils/text/textProvider';
import Header from '../components/header';
import BackgroundImageFull from '../components/background-image-full';

// const Image = tw(BackgroundImage)`
//   rounded md:w-10/12 lg:w-9/12 xl:w-8/12 
//   bg-cover bg-center
//   mx-4 sm:mx-8 md:mx-4 lg:mx-8
// `;
const StyledImage = tw(BackgroundImage)`mt-0 m-auto rounded border-8 border-red-700`;
const Image = tw(BackgroundImage)`
  rounded md:w-11/12 lg:w-10/12 xl:w-9/12 md:h-144
   bg-cover bg-center
  mx-auto
`;

const AboutMe = () => {
  const getText = useContext(GetText);
  const text = getText('aboutMe')

  const { bg, am } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "aboutMeCropped.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      am: file(relativePath: { eq: "amarinder-cropped-edited.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return <>
    <BackgroundImageFull fluid={bg.childImageSharp.fluid} title="Paramjit Singh Bal">
      <Header section='AM'/>
    </BackgroundImageFull>
    
    <div tw='flex-auto mt-24'>
      <h2 tw="block my-16 text-center font-bold">{text['greeting']}</h2>
      {text['intro'].map((item, idx) => 
        <p key={idx} tw="block mt-12 w-10/12 mx-auto text-3xl">
          {item}
        </p>
      )}
    </div>

    
      {/* <div tw="space-x-64"/> */}
    <div tw="justify-center items-center pb-20">
      <Image fluid={am.childImageSharp.fluid}/>
    </div>  
    
  </>;
}

export default AboutMe;
