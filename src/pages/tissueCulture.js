import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImageFull from '../components/background-image-full';
import Header from '../components/header';
import { GetText } from '../utils/text/textProvider';
import { PictureWithText, TextWithPicture } from '../components/picture-text';

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

      df: file(relativePath: { eq: "disease-free.jpg" }) {
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

  return (<>
    <BackgroundImageFull fluid={bg.childImageSharp.fluid} title="TissueCultureBG">
      <Header section='TC'/>
    </BackgroundImageFull>
    <PictureWithText 
      fluid={df.childImageSharp.fluid}
      title={text['points']['df']['title']}
      body={[text['tm'], text['points']['df']['-'], text['om'], text['points']['df']['+']]}
    />
    <TextWithPicture
      fluid={qs.childImageSharp.fluid}
      title={text['points']['qs']['title']}
      body={[text['tm'], text['points']['qs']['-'], text['om'], text['points']['qs']['+']]}
    />
    <PictureWithText
      fluid={sp.childImageSharp.fluid}
      title={text['points']['sp']['title']}
      body={[text['tm'], text['points']['sp']['-'], text['om'], text['points']['sp']['+']]}
    />
  </>)
}
export default TissueCulture;
