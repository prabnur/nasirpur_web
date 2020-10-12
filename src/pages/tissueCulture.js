import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import Header from '../components/header';
import BackgroundImageFull from '../components/background-image-full';

const TissueCulture = () =>{
  const data = useStaticQuery(
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
          fixed(width: 900, height: 900, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      qs: file(relativePath: { eq: "quick-spread.jpg" }) {
        childImageSharp {
          fixed(width: 900, height: 900, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      
      sp: file(relativePath: { eq: "seed-producers.jpg" }) {
        childImageSharp {
          fixed(width: 900, height: 900, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }`
  )
  console.log(data)
  return (
    <BackgroundImageFull fluid={data.bg.childImageSharp.fluid} title="TissueCultureBG">
      <Header section='TC'/>
    </BackgroundImageFull>
  )
}
export default TissueCulture;
