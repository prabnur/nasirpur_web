import React from 'react'
//import { graphql, useStaticQuery } from 'gatsby';
//import Img from "gatsby-image";

import Menu from '../components/header';

const IndexPage = () => {
  /*
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)*/
  return (
      <Menu section="AM"/>);
}

export default IndexPage;
