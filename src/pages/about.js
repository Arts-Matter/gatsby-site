import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import AboutBottomHeaderArea from "../components/aboutBottomHeaderArea"
import History from "../components/history"
import ProgramPillars from "../components/programPillars"
import Team from "../components/team"

const title = "About"

const topRight =
  "ArtsMatter draws upon a dynamic catalogue of content provided by top artists and creators to produce high-impact arts education programming for Los Angeles schools."

const bottom = <AboutBottomHeaderArea />

const Page = ({ data }) => {
  data.allContentfulBio.nodes.splice(1, 1)
  const teamMembers = data.allContentfulBio.nodes.reduce(
    (members, curMember) => {
      const { name, role } = curMember
      const imageSrc = "https:".concat(curMember.image.fixed.src)

      const descriptions = curMember.description.content.reduce(
        (descriptions, curDescription) => {
          descriptions.push(curDescription.content[0].value)
          return descriptions
        },
        []
      )

      const newMember = {
        name,
        role,
        descriptions,
        imageSrc,
      }

      members.push(newMember)

      return members
    },
    []
  )

  return (
    <Layout active="about">
      <SEO title={title} />
      <HeaderArea topLeft="About" topRight={topRight} bottom={bottom} />
      <History />
      <ProgramPillars />
      <Team team={teamMembers} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBio {
      nodes {
        name
        role
        image {
          fixed {
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
`
export default Page
