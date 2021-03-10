import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import ResourcesSearchPanel from "../components/resourcesSearchPanel"
import ResourcesResultsPanel from "../components/resourcesResultsPanel"
import ResourcesNotFound from "../components/resourcesNotFound"

import "../components/resources.scss"

const Page = ({ data }) => {
  const title = "Instructional Resources"
  const topRight =
    "Lesson plans, activity guides, instructional media, student worksheets, assessment rubrics, and more provide a standards-based framework for teaching media arts in the classroom with the structure needed for students to learn."
  const resources = data.allContentfulResourceBucket.edges
  const [activeResources, setActiveResources] = useState(resources)
  const initialActiveFilters = {
    subjectArea: [],
    mediaArtsDiscipline: [],
    gradeLevel: [],
  }
  const [activeFilters, setActiveFilters] = useState(initialActiveFilters)

  const handleFilterChange = (isFilterChecked, groupSlug, childName) => {
    let groupArray = activeFilters[groupSlug].slice()

    if (isFilterChecked) {
      groupArray.push(childName)
    } else {
      groupArray = groupArray.filter(item => item !== childName)
    }

    const updatedActiveFilters = { ...activeFilters, [groupSlug]: groupArray }
    setActiveFilters(updatedActiveFilters)

    // set the baseline
    let filteredResources = resources

    // filter Subject Area if any filter are set
    if (updatedActiveFilters.subjectArea.length) {
      filteredResources = filteredResources.filter(({ node }) => {
        if (node.subjectArea) {
          return updatedActiveFilters.subjectArea.some(i =>
            node.subjectArea.includes(i)
          )
        } else {
          return false
        }
      })
    }

    // filter Media Arts Strain
    if (updatedActiveFilters.mediaArtsDiscipline.length) {
      filteredResources = filteredResources.filter(({ node }) => {
        if (node.mediaArtsDiscipline) {
          return updatedActiveFilters.mediaArtsDiscipline.some(i =>
            node.mediaArtsDiscipline.includes(i)
          )
        } else {
          return false
        }
      })
    }

    // filter Grade Level
    if (updatedActiveFilters.gradeLevel.length) {
      filteredResources = filteredResources.filter(({ node }) => {
        if (node.gradeLevel !== null) {
          return updatedActiveFilters.gradeLevel.some(i => {
            let nodeSelectedGrades = node.gradeLevel.map(grade =>
              grade.replace(/[^0-9]/g, "")
            )
            return nodeSelectedGrades.includes(i)
          })
        } else {
          return false
        }
      })
    }

    setActiveResources(filteredResources)
  }

  return (
    <Layout active="resources" bgColor="geo">
      <SEO title={title} />
      <HeaderArea topLeft={title} topRight={topRight} />
      <ResourcesSearchPanel handleFilterChange={handleFilterChange} />
      {activeResources.length > 0 ? (
        <ResourcesResultsPanel resources={activeResources} />
      ) : (
        <ResourcesNotFound />
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulResourceBucket {
      edges {
        node {
          gradeLevel
          mediaArtsDiscipline
          subjectArea
          id
          title
          videos
          instructionalResources {
            file {
              fileName
              contentType
              url
            }
            title
          }
          featuredImage {
            file {
              fileName
              url
            }
          }
          classroomPhotos {
            file {
              url
            }
            title
          }
          studentArtwork {
            file {
              contentType
              fileName
              url
            }
          }
          slug
          contentful_id
          childContentfulResourceBucketDescriptionRichTextNode {
            json
          }
          childContentfulResourceBucketExcerptRichTextNode {
            json
          }
        }
      }
    }
  }
`

export default Page
