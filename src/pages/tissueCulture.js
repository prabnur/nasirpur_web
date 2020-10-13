import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImageFull from '../components/background-image-full';
import Header from '../components/header';
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
  return (<>
    <BackgroundImageFull fluid={bg.childImageSharp.fluid} title="TissueCultureBG">
      <Header section='TC'/>
    </BackgroundImageFull>
    <PictureWithText fluid={df.childImageSharp.fluid}/>
    <TextWithPicture fluid={qs.childImageSharp.fluid}/>
    <PictureWithText fluid={sp.childImageSharp.fluid}/>
   </>)
}
export default TissueCulture;
