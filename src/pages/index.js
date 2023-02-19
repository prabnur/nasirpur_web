import React, { useContext } from "react"
import { useMediaQuery } from "react-responsive"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import tw from "twin.macro"

import { GetText } from "../utils/text/textProvider"
import Header from "../components/header"
import BackgroundImageFull from "../components/background-image-full"
import SEO from "../components/seo"

import contactDetails from "../utils/json/contact-details.json"
import aboutMeLD from "../utils/json/aboutMeLD.json"
import logoLD from "../utils/json/logoLD.json"
aboutMeLD["telephone"] = contactDetails["number"]

const Image = tw(BackgroundImage)`
  rounded
  w-10/12 md:w-11/12 lg:w-10/12 xl:w-9/12 
  h-48 mbl:h-64 sm:h-80 six:h-100 md:h-124 lg:h-144 xl:h-screen
  bg-cover bg-center mx-auto
`

const TextChunks = tw.div`flex-auto`
const TextChunk = tw.p`
  block text-center mx-auto
  mt-6
  w-10/12 md:w-10/12 lg:w-7/12 xl:w-6/12
  text-2xl lg:text-3xl
`

const AboutMe = () => {
  const getText = useContext(GetText)
  const text = getText("aboutMe")
  const isBGDesktop = useMediaQuery({ minWidth: 662 })
  const siteUrl = "https://nasirpur.farm"

  const { bg, bg_mb, logo, am } = useStaticQuery(query)
  aboutMeLD["image"] = `${siteUrl}${bg_mb.childImageSharp.resize.src}`
  logoLD["logo"] = `${siteUrl}${logo.childImageSharp.resize.src}`
  return (
    <>
      <SEO
        title={text["title"]}
        description={text["description"]}
        image={bg.childImageSharp.resize}
        structured_data={[aboutMeLD, logoLD]}
        keywords={text["keywords"]}
        lang={getText("htmlLangCode")}
        url={siteUrl}
      />

      <BackgroundImageFull
        fluid={(isBGDesktop ? bg : bg_mb).childImageSharp.fluid}
        title="Paramjit Singh Bal"
      >
        <Header section="AM" />
      </BackgroundImageFull>

      <TextChunks tw="mt-8">
        <h1 tw="block text-center text-green-900">{text["title"]}</h1>
        <h2 tw="block text-center font-bold mt-10 mb-10">{text["greeting"]}</h2>
        {text["intro"].map((item, idx) => (
          <TextChunk key={idx}>{item}</TextChunk>
        ))}
      </TextChunks>

      <Image fluid={am.childImageSharp.fluid} />

      <TextChunks tw="pb-16">
        <h2 tw="block text-center mt-12 w-10/12 mx-auto font-semibold text-4xl text-green-800">
          {text["ms"]["title"]}
        </h2>
        <TextChunk>{text["ms"]["statement"]}</TextChunk>
      </TextChunks>
    </>
  )
}

const query = graphql`
  query {
    bg: file(relativePath: { eq: "aboutMeCropped.jpg" }) {
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

    bg_mb: file(relativePath: { eq: "aboutMeCropped_mb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
        resize(width: 1520) {
          src
          height
          width
        }
      }
    }

    logo: file(relativePath: { eq: "nasirpur_farms_logo.png" }) {
      childImageSharp {
        resize(width: 512) {
          src
          width
          height
        }
      }
    }

    am: file(relativePath: { eq: "amarinder-cropped-edited.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default AboutMe
