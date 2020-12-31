import React from "react"
import { graphql } from "gatsby"
import "./singleNews.scss"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useWindowSize } from "../components/hooks"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeaderArea from "../components/headerArea"
import SocialMediaBar from "../components/socialMediaBar"

export default function SingleNews({ data, pageContext }) {
  const { width } = useWindowSize()
  const newsData = data.allContentfulNewsItem.edges[0].node
  const body = newsData.body ? newsData.body.json : null
  const byline = newsData.byline ? newsData.byline : null
  const id = newsData["contentful_id"] ? newsData["contentful_id"] : null
  const date = newsData.date ? newsData.date : null
  const image = newsData.headerImage ? newsData.headerImage.fixed.src : null
  const summary = newsData.summary ? newsData.summary.summary : null
  const title = newsData.title ? newsData.title : null

  console.log(body)

  const returnHeaderLeft = () => {
    return (
      <React.Fragment>
        {title && <h1>{title}</h1>}
        {(date || byline) && (
          <h6>
            {`${date ? date : ""}`}&nbsp;&nbsp;{`${date && byline ? "|" : ""}`}
            &nbsp;&nbsp;By {`${byline ? byline : ""}`}
          </h6>
        )}
        {width < 890 && returnHeaderRight()}
        <h4>{summary}</h4>
      </React.Fragment>
    )
  }

  const returnHeaderRight = () => {
    return (
      <React.Fragment>
        {image && (
          <div className="top__image-container">
            <div
              className="top__image"
              style={{
                backgroundImage: `url("${image}")`,
              }}
            ></div>
          </div>
        )}
      </React.Fragment>
    )
  }

  const NewsImage = ({ file, description }) => {
    return (
      <div className="news-article__image">
        {file && <img src={file["en-US"].url} alt={description ? description["en-US"]: ""} />}
        {description && <div>{description["en-US"]}</div>}
      </div>
    )
  }

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { file, description } = node.data.target.fields
        return <NewsImage file={file} description={description} />
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="news-article__text">{children}</p>
      ),
    },
  }

  return (
    <Layout active="news-article" bgColor="magenta">
      <SEO title="News Article" />
      <HeaderArea
        topLeft={returnHeaderLeft()}
        topRight={width > 889 ? returnHeaderRight() : null}
        customTop={true}
      />
      <div className="news-article__container">
        <SocialMediaBar />
        {documentToReactComponents(body, options)}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SingleNewsQuery($id: String!) {
    allContentfulNewsItem(filter: { contentful_id: { eq: $id } }) {
      edges {
        node {
          title
          summary {
            summary
          }
          contentful_id
          date
          headerImage {
            fixed {
              src
            }
          }
          byline
          body {
            json
          }
        }
      }
    }
  }
`
