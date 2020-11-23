import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import ResourcesSearchPanel from "../components/resourcesSearchPanel"
import ResourcesResultsPanel from "../components/resourcesResultsPanel"
import ResourcesNotFound from "../components/resourcesNotFound"

import "../components/resources.scss"

const Page = ({ data }) => {
  const title = "Resources"
  const topRight = "Lesson plans, activity guides, instructional media, student worksheets, assessment rubrics, and more provide a standards-based framework for teaching media arts in the classroom with the structure needed for students to learn."
  const resources = data.allContentfulResource.edges
  const [activeResources, setActiveResources] = useState(resources)
  const initialActiveFilters = {
    "subjectArea": [],
    "mediaArtsStrain": [],
    "gradeLevel": []
  }
  const [activeFilters, setActiveFilters] = useState(initialActiveFilters)

  const handleFilterClick = (e, groupSlug, childName) => {
    let groupArray = activeFilters[groupSlug].slice()

    if ( e.target.checked ) {
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
        }
      })
    }

    // filter Media Arts Strain
    if (updatedActiveFilters.mediaArtsStrain.length) {
      filteredResources = filteredResources.filter(({ node }) => {
        if (node.mediaArtsStrain) {
          return updatedActiveFilters.mediaArtsStrain.some(i => node.mediaArtsStrain.includes(i))
        }
      })
    }

    // filter Grade Level
    if (updatedActiveFilters.gradeLevel.length) {
      filteredResources = filteredResources.filter(({ node }) => {
        if (node.gradeLevel !== null) {
          return updatedActiveFilters.gradeLevel.some(i => node.gradeLevel === parseInt(i))
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
        return node.standard.includes(searchTerm)
      } else {
        return false
      }
    })

    setActiveResources(searchedResources)
  }

  useEffect(() => {
    // Log the stuff to see what is going on
    console.log(activeFilters)
    console.log(activeResources)
  })
  
  return (  
    <Layout active="resources">
      <SEO title={title} />
      <HeaderArea topLeft={title} topRight={topRight} />
      <ResourcesSearchPanel handleFilterClick={handleFilterClick} handleSearch={handleSearch} />
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

export default Page
