import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import tw from 'twin.macro';

import BackgroundImageFull, { TextHighlight } from '../components/background-image-full';
import Header from '../components/header';
import { GetText } from '../utils/text/textProvider';
import Card from '../components/card';

const Content = tw.div`mt-24 sm:mt-16`;

const CurrentlyAvailable = tw.div`
  bg-black text-white rounded-lg
  p-3 flex-1 overflow-auto my-8 text-center`;

const Heading = tw.h1`text-green-900`;

const TissueCulture = () => {
  const { bg, df, qs, sp} = useStaticQuery(
    graphql`query {
      bg: file(relativePath: { eq: "cuttingEdge.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      df: file(relativePath: { eq: "inspection-cropped.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      qs: file(relativePath: { eq: "quick-spread.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      
      sp: file(relativePath: { eq: "seed-producers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`
  )
  
  const getText = React.useContext(GetText);
  const text = getText('tissueCulture')

  const cards = [
    {
      fluid: df.childImageSharp.fluid,
      title: text['points']['df']['title'],
      subtitleTM: text['tm'],
      descriptionTM: text['points']['df']['-'],
      subtitleOM: text['om'],
      descriptionOM: text['points']['df']['+']
    },
    {
      fluid: qs.childImageSharp.fluid,
      title: text['points']['qs']['title'],
      subtitleTM: text['tm'],
      descriptionTM: text['points']['qs']['-'],
      subtitleOM: text['om'],
      descriptionOM: text['points']['qs']['+']
    },
    {
      fluid: sp.childImageSharp.fluid,
      title: text['points']['sp']['title'],
      subtitleTM: text['tm'],
      descriptionTM: text['points']['sp']['-'],
      subtitleOM: text['om'],
      descriptionOM: text['points']['sp']['+']
    }
  ];

  return (<>
    <BackgroundImageFull fluid={bg.childImageSharp.fluid} title="TissueCultureBG">
      <Header section='TC'/>
      <TextHighlight tw="mt-32 ml-16"><Heading>{text['title'][0]}</Heading></TextHighlight>
      <TextHighlight tw="mt-8 ml-20 sm:mt-17rem sm:-ml-32"><Heading>{text['title'][1]}</Heading></TextHighlight>
    </BackgroundImageFull>

    <div tw="relative">
      <Content>
        <Card key={0} card={cards[0]}/>
        <Card key={1} reversed card={cards[1]}/>
        <Card key={2} card={cards[2]}/>
      </Content>
    </div>

    <h2 tw="block mt-24 mb-12 sm:mt-32 sm:mb-16 text-center font-bold">{text['ca-title']}</h2>
    <div tw="mx-auto text-3xl w-80 font-semibold pb-16">  
      {text['ca-list'].map((item, idx) => <CurrentlyAvailable key={idx}>{item}</CurrentlyAvailable>)}
    </div>
  </>)
}
export default TissueCulture;
