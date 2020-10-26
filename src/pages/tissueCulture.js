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
  p-3 flex-1 overflow-auto my-8 text-center
`;

const Heading = tw.h1`text-green-900`;

const TissueCulture = () => {
  const query = useStaticQuery(
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

  const imageData = Object.values(query).slice(1,);
  const bg = query.bg.childImageSharp.fluid;

  const cards = imageData.map((data, idx) => ({
    fluid: data.childImageSharp.fluid,
    title: text['points'][idx]['title'],
    subtitleTM: text['tm'],
    descriptionTM: text['points'][idx]['-'],
    subtitleOM: text['om'],
    descriptionOM: text['points'][idx]['+']
  }));

  return (<>
    <BackgroundImageFull fluid={bg} title="TissueCultureBG">
      <Header section='TC'/>
      <div tw="mt-32 ml-16">
        <TextHighlight><Heading>{text['title'][0]}</Heading></TextHighlight>
        <TextHighlight tw="mt-6 ml-8 mbl:ml-10 sm:mt-32 sm:-ml-32"><Heading>{text['title'][1]}</Heading></TextHighlight>
      </div>
    </BackgroundImageFull>

    <div tw="relative">
      <Content>
        {cards.map((card, idx) => <Card key={idx} reversed={idx%2==1} card={card}/>)}
      </Content>
    </div>

    <h2 tw="block mt-24 mb-12 sm:mt-32 sm:mb-16 text-center font-bold">{text['ca-title']}</h2>
    <div tw="mx-auto text-3xl w-80 font-semibold pb-16">  
      {text['ca-list'].map((item, idx) => <CurrentlyAvailable key={idx}>{item}</CurrentlyAvailable>)}
    </div>
  </>)
}
export default TissueCulture;
