/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title_prop, description, image: metaImage, keywords, lang_prop, structured_data, url_prop }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )

  const title = title_prop || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords || site.siteMetadata.keywords
  const lang = lang_prop || 'en'
  const url = url_prop || site.siteMetadata.siteUrl

  const image = metaImage && metaImage.src ?
    `${site.siteMetadata.siteUrl}${metaImage.src}`
    :
    null
  
  if (title === 'Nasirpur Farms') {

  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        // Basic
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: metaKeywords.join(','),
        },

        // Open Graph (Facebook)
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },

        // Put Twitter Username below or twitter:creator:id
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata.author,
        // },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        metaImage ?
        [
          {
            property: "og:image",
            content: image,
          },
          {
            property: "og:image:width",
            content: metaImage.width,
          },
          {
            property: "og:image:height",
            content: metaImage.height,
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
        ]
        :
        [
          {
            name: "twitter:card",
            content: "summary",
          },
        ]
      )}
    >{structured_data &&
      structured_data.map((ld) =>
        <script type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  })
}

export default SEO
