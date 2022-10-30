import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./team.scss"
import { useWindowSize } from "./hooks"

import TeamMember from "./teamMember"

export default function AboutTeam() {
  const { width } = useWindowSize()

  const data = useStaticQuery(graphql`
    {
      allContentfulListOfThings(
        filter: { listName: { eq: "About page bios" } }
      ) {
        totalCount
        nodes {
          entries {
            ... on ContentfulBio {
              role
              name
              description {
                content {
                  content {
                    value
                    marks {
                      type
                    }
                  }
                }
              }
              image {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  if ( data.allContentfulListOfThings.nodes.entries.length === 0 ) {
    return null;
  }

  const  teamMembers = data.allContentfulListOfThings.nodes[0].entries.reduce(
    (team, curMember) => {
      const descriptions = curMember.description.content.reduce(
        (descriptions, curDescription) => {
          // The content is nested within description.content
          // If there are marks this content will be broken up in to separate arrays
          const desc = curDescription.content.reduce((content, curContent) => {
            // If the description has marks (i.e. italic) preserve this data
            if (curContent.marks.length !== 0) {
              content.push(curContent)
            } else {
              // Otherwise it's normal text
              content.push(curContent.value)
            }
            return content
          }, [])
          descriptions.push(desc)
          return descriptions
        },
        []
      )
      const newMember = {
        name: curMember.name,
        role: curMember.role,
        imageSrc: curMember.image.fixed.src,
        descriptions,
      }

      team.push(newMember)
      return team
    },
    []
  )

  return (
    <div className="team">
      <h2 className="team__title">Team</h2>
      <h3 className="team__subtitle">
        ArtsMatter has assembled an exceptional team of staff and project
        consultants to implement the innovative work of Media ArtsMatter and its
        other pioneering arts integration programs.
        <br></br>
        <br></br>
        Individuals have been selected for their broad experience in
        standards-based instruction, arts education, student programming,
        professional development, teacher coaching, and impactful work
        throughout LA County schools.
      </h3>
      <div className="team-container">
        {width > 889 ? (
          teamMembers.map((member, i) => (
            <TeamMember
              key={`${member.name}${i}`}
              member={member}
              teamDescriptions={true}
            />
          ))
        ) : (
          <div className="team-container__wrapper">
            {teamMembers.map((member, i) => (
              <TeamMember
                key={`${member.role}${i}`}
                member={member}
                teamDescriptions={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
