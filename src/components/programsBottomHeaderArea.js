import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./programsBottomHeaderArea.scss"
import ProgrammingCard from "./programmingCard"

export default function ProgramsBottomHeaderArea() {
  const data = useStaticQuery(graphql`
    {
      allContentfulListOfThings(
        filter: { listName: { eq: "Featured programs" } }
      ) {
        nodes {
          entries {
            ... on ContentfulProgram {
              title
              childContentfulProgramSummaryRichTextNode {
                content {
                  content {
                    value
                  }
                }
              }
              contentful_id
            }
            ... on ContentfulListOfThings {
              listName
              listDescription {
                content {
                  content {
                    value
                  }
                }
              }
              entries {
                ... on ContentfulProgram {
                  title
                  summary {
                    content {
                      content {
                        value
                      }
                    }
                  }
                  contentful_id
                }
              }
            }
          }
        }
      }
    }
  `)

  const cardData = data.allContentfulListOfThings.nodes[0].entries.reduce(
    (acc, curEntry) => {
      const type = curEntry["__typename"]

      if (type === "ContentfulProgram") {
        let summary = curEntry.childContentfulProgramSummaryRichTextNode.content.reduce(
          (summaries, curSummary) => {
            summaries.push(curSummary.content[0].value)
            return summaries
          },
          []
        )
        summary = summary.join("")
        const title = curEntry.title
        const id = curEntry["contentful_id"]

        acc.push({
          id,
          title,
          summary,
        })
      } else {
        const title = curEntry.listName
        let summary = curEntry.listDescription.content.reduce(
          (summaries, curSummary) => {
            summaries.push(curSummary.content[0].value)
            return summaries
          },
          []
        )
        summary = summary.join("")
        const entries = curEntry.entries.reduce((acc, cur) => {
          const title = cur.title
          const id = cur["contentful_id"]

          let summary = cur.summary.content[0].content.reduce(
            (summaries, curSummary) => {
              summaries.push(curSummary.value)
              return summaries
            },
            []
          )
          summary = summary.join("")
          acc.push({ title, id, summary })
          return acc
        }, [])
        acc.push({ title, summary, entries })
      }

      return acc
    },
    []
  )

  return (
    <div className="current-programming">
      <div className="current-programming__title">current programming</div>
      <div className="current-programming__cards">
        {cardData.map((card, i) => {
          return (
            <ProgrammingCard
              key={`${card.title}${i}`}
              title={card.title}
              summary={card.summary}
              id={card.id}
              entries={card.entries ? card.entries : null}
            />
          )
        })}
      </div>
    </div>
  )
}
