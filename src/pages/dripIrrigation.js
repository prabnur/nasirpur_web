import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
// import { useMediaQuery } from 'react-responsive'
import tw from 'twin.macro';

import BackgroundImageFull, { TextHighlight } from '../components/background-image-full';
import Header from '../components/header';
import Card from '../components/card-bullets';
import { GetText } from '../utils/text/textProvider';
import SEO from '../components/seo';

const Heading = tw.h1`text-indigo-600 text-4xl mbl:text-5xl`;
// const SmallHeading = tw.h2`text-indigo-600`;

// const Heading = () => {
//   const isBigEnough = useMediaQuery({ minWidth: 662 });
// }

const DripIrrigation = () => {
  const query = useStaticQuery(
    graphql`query {
      bg: file(relativePath: { eq: "yellow-hydration.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          resize(width: 1200) {
            src
            height
            width
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
    <SEO
      title={text['metaTitle']}
      description={text['description']}
      image={query.bg.childImageSharp.resize}
      keywords={text['keywords']}
      lang={getText('htmlLangCode')}
      url='https://www.nasirpur.farm/dripIrrigation/'
    />

    <BackgroundImageFull fluid={bg} title="DripIrrigationBG">
      <Header section='DI'/>
      <div tw="mt-80 ml-12">
        <TextHighlight><Heading>{text['title'][0]}</Heading></TextHighlight>
        <TextHighlight tw="mt-6 ml-8 mbl:ml-10 sm:mt-32 sm:-ml-32"><Heading>{text['title'][1]}</Heading></TextHighlight>
      </div>
    </BackgroundImageFull>

    {cards.map((card, idx) => <Card key={idx} reversed={idx%2===1} card={card}/>)}

    <div tw="pb-20"></div>
  </>);
}
export default DripIrrigation;
