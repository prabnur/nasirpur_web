import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import tw from 'twin.macro';

import { GetText } from '../utils/text/textProvider';
import Header from '../components/header';
import BackgroundImageFull from '../components/background-image-full';

const Image = tw(BackgroundImage)`
  rounded w-10/12 md:w-11/12 lg:w-10/12 xl:w-9/12 
  h-80 md:h-screen bg-cover bg-center mx-auto border-8 border-brown
`;

const TextChunks = tw.div`flex-auto mt-24`;
const TextChunk = tw.p`block mt-12 w-10/12 mx-auto text-3xl`;

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
    
    <TextChunks tw="mt-8">
      <h1 tw="block text-center font-bold">{text['greeting']}</h1>
      {text['intro'].map((item, idx) => 
        <TextChunk key={idx}>
          {item}
        </TextChunk>
      )}
    </TextChunks>
    
    <Image fluid={am.childImageSharp.fluid}/>

    <TextChunks tw="pb-16">
      <h2 tw="block mt-12 w-10/12 mx-auto font-semibold text-4xl">{text['ms']['title']}</h2>
      <TextChunk>
        {text['ms']['statement']}
      </TextChunk>
    </TextChunks>
    
  </>;
}

export default AboutMe;
