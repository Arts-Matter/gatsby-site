import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./aboutBottomHeaderArea.scss"

export default function AboutBottomHeaderArea() {
  const data = useStaticQuery(graphql`
    {
      allContentfulImageWithText(
        filter: { title: { eq: "About page header content" } }
      ) {
        edges {
          node {
            image {
              fixed(width: 600, quality: 100) {
                src
              }
            }
            description {
              content {
                content {
                  value
                }
              }
            }
          }
        }
      }
    }
  `)

  const { description, image } = data.allContentfulImageWithText.edges[0].node

  const bottomLeft = (
    <div>
      {description &&
        description.content.map((content, i) => (
          <p key={i} className="bottom-text">
            {content.content[0].value}
          </p>
        ))}
    </div>
  )
  const bottomRight = (
    <div className="image-container">
      {image && (
        <div
          className="image"
          style={{ backgroundImage: `url(${image.fixed.src})` }}
        ></div>
      )}
    </div>
  )

  return (
    <>
      <div className="bottom__left">
        <span className="bottom__label">mission statement</span>
        {bottomLeft}
      </div>
      <div className="bottom__right">{bottomRight}</div>
    </>
  )
}
