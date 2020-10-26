import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import tw from 'twin.macro';

import BackgroundImageFull, { TextHighlight } from '../components/background-image-full';
import Header from '../components/header';
import Card from '../components/card-bullets';
import { GetText } from '../utils/text/textProvider';

const Heading = tw.h1`text-indigo-600`;

const DripIrrigation = () => {
  const query = useStaticQuery(
    graphql`query {
      bg: file(relativePath: { eq: "yellow-hydration.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      mg: file(relativePath: { eq: "maximise-gains.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ms: file(relativePath: { eq: "maximise-savings.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ps: file(relativePath: { eq: "premium-materials.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ct: file(relativePath: { eq: "custom-tailored.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

    }`
  );

  const imageData = Object.values(query).slice(1,);
  const bg = query.bg.childImageSharp.fluid;
  
  const getText = React.useContext(GetText);
  const text = getText('dripIrrigation')

  const cards = imageData.map((data, idx) => ({
    fluid: data.childImageSharp.fluid,
    title: text['points'][idx]['title'],
    bullets: text['points'][idx]['bullets']
  }));

  return (<>
    <BackgroundImageFull fluid={bg} title="DripIrrigationBG">
      <Header section='DI'/>
      <TextHighlight tw="mt-32 ml-16"><Heading>{text['title'][0]}</Heading></TextHighlight>
      <TextHighlight tw="mt-8 ml-20 sm:mt-17rem sm:-ml-32"><Heading>{text['title'][1]}</Heading></TextHighlight>
    </BackgroundImageFull>

    {cards.map((card, idx) => <Card key={idx} reversed={idx%2==1} card={card}/>)}

    <div tw="pb-20"></div>
  </>);
}
export default DripIrrigation;
