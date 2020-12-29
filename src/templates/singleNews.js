import React from "react"
import { graphql } from "gatsby"

export default function SingleNews({ data, pageContext }) {
  console.log(data)
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        height: "500px",
        justifyContent: "space-around",
      }}
    >
      <h1>This is a single news page</h1>
      <h4>
        <strong>Open the console to view GraphQL data</strong>
      </h4>
      <p>
        Most if not all of the data needed for single news pages should be
        present. Will need to edit query if missing needed data. To preserve
        styles of the body property of returned data(in console) you will need to use a Rich
        Text Rendering library.
      </p>
    </div>
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
