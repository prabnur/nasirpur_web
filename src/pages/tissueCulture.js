import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import Header from '../components/header';
import BackgroundImageFull from '../components/background-image-full';

const TissueCulture = () =>{
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
  return (
    <BackgroundImageFull data={imgData} title="TissueCultureBG">
      <Header section='TC'/>
    </BackgroundImageFull>
  )
}
export default TissueCulture;
