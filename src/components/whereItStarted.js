import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useWindowSize } from "./hooks"
import { determineSlug } from "./helpers"
import "./whereItStarted.scss"
import Button from "./button"

export default function WhereItStarted() {
  const { width } = useWindowSize()

  const data = useStaticQuery(graphql`
    {
      allContentfulNewsItem(
        filter: {
          title: { eq: "Pacific Standard Time: LA/LA Education Program" }
        }
      ) {
        edges {
          node {
            title
            slug
            contentful_id
          }
        }
      }
    }
  `)

  const {
    title,
    slug,
    contentful_id,
  } = data.allContentfulNewsItem.edges[0].node
  const formattedSlug = determineSlug(slug, title, contentful_id)
  const url = `/news/${formattedSlug}`

  return (
    <div className="where-it-all-started">
      {width < 890 && <div className="where-it-all-started__image"></div>}
      <div className="where-it-all-started-container">
        <div className="where-it-all-started-container__left">
          <div className="where-it-all-started-container__text-container">
            <h6>A Look Back...</h6>
            <h4>PST: LA/LA Education Program</h4>
            <p>
              The PST: LA/LA Education Program engaged thousands of students and
              teachers with creative learning opportunities through content from
              exhibitions of Latin American and Latino art in cultural
              institutions and museums across Southern California.
            </p>
            {url && <Button url={url} text="Learn More" />}
          </div>
        </div>
      </div>
      {width > 889 && <div className="where-it-all-started__image"></div>}
    </div>
  )
}
