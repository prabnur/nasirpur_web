import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

// import tw from 'twin.macro';

import Header from '../components/header';
import BackgroundImageFull from '../components/background-image-full';

// const Test = () =>
// <div tw='bg-gray-400 flex-auto items-start'>
//   <span tw='bg-indigo-700 w-12 h-12 m-3 block'/>
//   <span tw='bg-teal-700 w-full h-16 m-3 block float-right'/>
//   <span tw='bg-indigo-700 w-10 h-10 m-3 block'/>
// </div>

// import { GetText } from '../utils/text/textProvider';
// const JustifiedText = tw.li`block my-4 text-justify`;
// const Maybe = () =>
//   <div tw='flex-auto'>
//     <h1>{Text['hi']}</h1>
//     <h2>{Text['intro']}</h2>
//     <ul>
//       {Text['statements'].map((statement) => 
//         <JustifiedText>{statement}</JustifiedText>)}
//     </ul>
//   </div>;

const AboutMe = () => {
  // const getText = useContext(GetText);
  // const Text = getText('aboutMe')

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
    <BackgroundImageFull data={imgData} title="TissueCultureBG">
      <Header section='AM'/>
    </BackgroundImageFull>
  </>;
}

export default AboutMe;
