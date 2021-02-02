import React, { useState } from "react"
import { graphql } from "gatsby"

// TODO
// Update data being pulled for active resources and being passed to results panel

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import ResourcesSearchPanel from "../components/resourcesSearchPanel"
import ResourcesResultsPanel from "../components/resourcesResultsPanel"
import ResourcesNotFound from "../components/resourcesNotFound"

import "../components/resources.scss"

const Page = ({ data }) => {
  const title = "Instructional Resources"
  const topRight = "Lesson plans, activity guides, instructional media, student worksheets, assessment rubrics, and more provide a standards-based framework for teaching media arts in the classroom with the structure needed for students to learn."
  const resources = data.allContentfulResource.edges
  const [activeResources, setActiveResources] = useState(resources)
  const initialActiveFilters = {
    "subjectArea": [],
    "mediaArtsStrain": [],
    "gradeLevel": []
  }
  const [activeFilters, setActiveFilters] = useState(initialActiveFilters)

  const handleFilterChange = (isFilterChecked, groupSlug, childName) => {
    let groupArray = activeFilters[groupSlug].slice()

    if ( isFilterChecked ) {
      groupArray.push(childName);
    } else {
      groupArray = groupArray.filter(item => item !== childName)
    }

    const updatedActiveFilters = { ...activeFilters, [groupSlug]: groupArray }
    setActiveFilters(updatedActiveFilters)

    // set the baseline
    let filteredResources = resources;

    // filter Subject Area if any filter are set
    if (updatedActiveFilters.subjectArea.length) {
      filteredResources = filteredResources.filter(({ node }) => {
        if (node.subjectArea) {
          return updatedActiveFilters.subjectArea.some(i => node.subjectArea.includes(i))
        } else {
          return false
        }
      })
    }

    // filter Media Arts Strain
    if (updatedActiveFilters.mediaArtsStrain.length) {
      filteredResources = filteredResources.filter(({ node }) => {
        if (node.mediaArtsStrain) {
          return updatedActiveFilters.mediaArtsStrain.some(i => node.mediaArtsStrain.includes(i))
        } else {
          return false
        }
      })
    }

    // filter Grade Level
    if (updatedActiveFilters.gradeLevel.length) {
      filteredResources = filteredResources.filter(({ node }) => {
        if (node.gradeLevel !== null) {
          return updatedActiveFilters.gradeLevel.some(i => node.gradeLevel === parseInt(i))
        } else {
          return false
        }
      })
    }

    setActiveResources(filteredResources)
  }

  const handleSearch = (searchTerm) => {
    const filterCheckboxes = document.querySelectorAll('.fancy-checkbox input')
    
    // Clear all the checkboxes because they aren't used for search
    filterCheckboxes.forEach((filter) => {
      filter.checked = false
    })

    // Clear active filter state
    setActiveFilters(initialActiveFilters)

    // Bail and reset resources if search term is blank
    if (!searchTerm) {
      setActiveResources(resources)
      return
    }

    // Show resources that match search term
    let searchedResources = resources
    
    searchedResources = searchedResources.filter(({ node }) => {
      if (node.standard) {
        const standardArray = node.standard.split(",").map(item => item.trim());
        return standardArray.includes(searchTerm)
      } else {
        return false
      }
    })

    setActiveResources(searchedResources)
  }
  
  return (  
    <Layout active="resources" bgColor="geo">
      <SEO title={title} />
      <HeaderArea topLeft={title} topRight={topRight} />
      <ResourcesSearchPanel handleFilterChange={handleFilterChange} handleSearch={handleSearch} />
      {activeResources.length > 0
        ? <ResourcesResultsPanel resources={activeResources} />
        : <ResourcesNotFound />
      }
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulResource {
      edges {
        node {
          gradeLevel
          mediaArtsStrain
          subjectArea
          standard
          title
          description {
            description
          }
          id
          resourceFiles {
            title
            id
            file {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`

/**
 * New query to pull from the Resource Bucket content type
 * 
 * Note:
 * 
 * - Standard has been removed entirely
 * - mediaArtsStrain is updated to mediaArtsDiscipline
 * - We will want to use the title to create a slug, or maybe offer them a slug field for this content type as well (like we will do for news)
 * - Classroom photos has a max of 3 images
 * - studentArtwork and instructional resources, we will want to confirm the file type
 * - videos is a full link right now, but this is just a text field. You will want to see how YouTube embed plugins prefer this string to come and we can update accordingly.
 */
/*
export const query = graphql`
  {
    allContentfulResourceBucket {
      edges {
        node {
          gradeLevel
          mediaArtsDiscipline
          subjectArea
          description {
            description
          }
          id
          title
          videos
          instructionalResources {
            file {
              fileName
              contentType
            }
            title
          }
          featuredImage {
            file {
              fileName
            }
          }
          classroomPhotos {
            file {
              fileName
            }
          }
          studentArtwork {
            file {
              contentType
              fileName
            }
          }
        }
      }
    }
  }
`
*/

export default Page
