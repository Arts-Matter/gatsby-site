import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./team.scss"

import TeamMember from "./teamMember"

export default function ContactPageTeam() {
    const data = useStaticQuery(graphql`
    {
      allContentfulListOfThings(
        filter: { listName: { eq: "Contact page bios" } }
      ) {
        totalCount
        nodes {
          entries {
            ... on ContentfulBio {
              role
              name
              email
              phone
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

  const teamMembers = data.allContentfulListOfThings.nodes[0].entries.reduce(
    (team, curMember) => {
      const newMember = {
        name: curMember.name,
        role: curMember.role,
        email: curMember.email,
        phone: curMember.phone,
        imageSrc: curMember.image.fixed.src,
      }

      team.push(newMember)
      return team
    },
    []
  )

  const contactTeam = (
    teamMembers.map((member, i) => (
      <TeamMember 
        key={`${member.name}${i}`}  
        member={member} 
        teamDescriptions={false}
      />
    ))
  )

  return (
    <div className="team">
        <h2 className="team__title">Our Team</h2>
        <div className="contact-team__container">
          {contactTeam}
        </div>
    </div>
  )
}
