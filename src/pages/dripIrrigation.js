import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import tw from 'twin.macro';

import BackgroundImageFull, { TextHighlight } from '../components/background-image-full';
import Header from '../components/header';
import { GetText } from '../utils/text/textProvider';

const Heading = tw.h1`text-indigo-600`;

const DripIrrigation = () => {
  const { bg } = useStaticQuery(
    graphql`query {
      bg: file(relativePath: { eq: "yellow-hydration.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }`
  );
  
  const getText = React.useContext(GetText);
  const text = getText('dripIrrigation')

  return (<>
    <BackgroundImageFull fluid={bg.childImageSharp.fluid} title="DripIrrigationBG">
      <Header section='DI'/>
      <TextHighlight tw="mt-32 ml-16"><Heading>{text['title'][0]}</Heading></TextHighlight>
      <TextHighlight tw="mt-8 ml-20 sm:mt-17rem sm:-ml-32"><Heading>{text['title'][1]}</Heading></TextHighlight>
    </BackgroundImageFull>


  </>);
}
export default DripIrrigation;
