import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";

import Header from '../components/header';

const IndexPage = () => {
  const aboutMeBG = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "aboutMe.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (<>
    <Header section="AM"/>
    <Img fluid={aboutMeBG.placeholderImage.childImageSharp.fluid} />
  </>);
}

export default IndexPage;
