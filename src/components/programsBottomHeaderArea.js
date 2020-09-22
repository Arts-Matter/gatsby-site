import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./programsBottomHeaderArea.scss"
import ProgrammingCard from "./programmingCard"
import ProgrammingCardExpandable from "./programmingCardExpandable"

export default function ProgramsBottomHeaderArea() {
  const data = useStaticQuery(graphql`
    {
      allContentfulProgram {
        edges {
          node {
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
  `)

  const cardsData = data.allContentfulProgram.edges.reduce((acc, cur) => {
    const { title, contentful_id } = cur.node
    let summary = cur.node.summary.content[0].content.reduce(
      (summary, curSummary) => {
        summary.push(curSummary.value)
        return summary
      },
      []
    )

    summary = summary.join("")

    const data = {
      title,
      summary,
      id: contentful_id,
    }

    acc.push(data)
    return acc
  }, [])

  const mediaCard = cardsData.find(card =>
    card.title.includes("Media ArtsMatter")
  )
  const la2030Card = cardsData.find(card => card.title.includes("LA2030"))
  const filmIndependentCard = cardsData.find(card =>
    card.title.includes("Film Independent")
  )
  const spongebobCard = cardsData.find(card => card.title.includes("SpongeBob"))
  const wonderParkCard = cardsData.find(card =>
    card.title.includes("Wonder Park")
  )
  const sherlockGnomesCard = cardsData.find(card =>
    card.title.includes("Sherlock Gnomes")
  )

  return (
    <>
      <div className="current-programming">
        <div className="current-programming__title">current programming</div>
        <div className="current-programming__cards">
          <ProgrammingCard
            title={mediaCard.title}
            summary={mediaCard.summary}
            id={mediaCard.id}
          />
          <ProgrammingCardExpandable
            title="Paramount"
            summary="Each Spring, Paramount collaborates with ArtsMatter to bring animation integration curriculum into ten LA County public schools."
            cards={[spongebobCard, wonderParkCard, sherlockGnomesCard]}
          />
          <ProgrammingCard
            title={la2030Card.title}
            summary={la2030Card.summary}
            id={la2030Card.id}
          />
          <ProgrammingCard
            title={filmIndependentCard.title}
            summary={filmIndependentCard.summary}
            id={filmIndependentCard.id}
          />
        </div>
      </div>
    </>
  )
}
