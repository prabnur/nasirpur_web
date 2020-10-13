import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import tw from 'twin.macro';

import { GetText } from '../utils/text/textProvider';
import Header from '../components/header';
import BackgroundImageFull from '../components/background-image-full';

// const Test = () =>
// <div tw='bg-gray-400 flex-auto items-start'>
//   <span tw='bg-indigo-700 w-12 h-12 m-3 block'/>
//   <span tw='bg-teal-700 w-full h-16 m-3 block float-right'/>
//   <span tw='bg-indigo-700 w-10 h-10 m-3 block'/>
// </div>

const TextPiece = tw.h2`block my-12`;

const AboutMe = () => {
  const getText = useContext(GetText);
  const text = getText('aboutMe')

  const imgData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "aboutMeCropped.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return <>
    <BackgroundImageFull fluid={imgData.file.childImageSharp.fluid} title="Paramjit Singh Bal">
      <Header section='AM'/>
    </BackgroundImageFull>
    <div tw='flex-auto text-center mt-24'>
      <h1 tw="block my-16">{text['greeting']}</h1>
      <h2 tw="block my-16">{text['intro']}</h2>
        {text['statements'].map((statement) => 
          <TextPiece>{statement}</TextPiece>)}
    </div>
  </>;
}

export default AboutMe;
