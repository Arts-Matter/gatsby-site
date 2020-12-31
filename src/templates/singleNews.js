import React from "react"
import { graphql } from "gatsby"
import "./singleNews.scss"
import { useWindowSize } from "../components/hooks"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeaderArea from "../components/headerArea"
import SocialMediaBar from "../components/socialMediaBar"

export default function SingleNews({ data, pageContext }) {
  const { width } = useWindowSize()
  const newsData = data.allContentfulNewsItem.edges[0].node
  const body = newsData.body ? newsData.body.body : null
  const byline = newsData.byline ? newsData.byline : null
  const id = newsData["contentful_id"] ? newsData["contentful_id"] : null
  const date = newsData.date ? newsData.date : null
  const image = newsData.headerImage ? newsData.headerImage.fixed.src : null
  const summary = newsData.summary ? newsData.summary.summary : null
  const title = newsData.title ? newsData.title : null

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
            body
          }
        }
      }
    }
  }
`
