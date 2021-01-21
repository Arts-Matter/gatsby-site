import React, { useState } from "react"
import ResourcesFilterGroup from "../components/resourcesFilterGroup"

import "./resourcesSearchPanel.scss"

export default function ResourcesSearchPanel({ handleFilterChange, handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleFilterClick = (e, groupSlug, childName) => {
    const isFilterChecked = e.target.checked

    // Clear out search field because we are now filtering
    setSearchTerm('')

    handleFilterChange(isFilterChecked, groupSlug, childName)
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClearClick = () => {
    setSearchTerm('')
    handleSearch('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(searchTerm);
  }

  /* ======================================================================= */
  /* NOTE: I couldn't figure out a way to pull the possible field values from
  /*       Contentful, so these are hardcoded. That means if they decide to
  /*       add a new Subject Area it will need to be added here before it will
  /*       work as a new filter.
  /* ======================================================================= */

  const filters = [
    {
      "groupName": "Subject Area",
      "groupSlug": "subjectArea",
      "children": [
        {
          "name": "Math",
          "slug": "Math"
        },
        {
          "name": "English/Language Arts",
          "slug": "English"
        },
        {
          "name": "Science",
          "slug": "Science"
        },
        {
          "name": "Social Studies",
          "slug": "Social"
        }
      ]
    },
    {
      "groupName": "Media Arts Discipline",
      // Update group slug after data from contentful is update
      "groupSlug": "mediaArtsStrain",
      "children": [
        {
          "name": "Design",
          "slug": "Design"
        },
        {
          "name": "Photography",
          "slug": "Photography"
        },
        {
          "name": "Animation",
          "slug": "Animation"
        },
        {
          "name": "Film",
          "slug": "Film"
        },
        {
          "name": "Game Design",
          "slug": "Game Design"
        }
      ]
    },
    {
      "groupName": "Grade Level",
      "groupSlug": "gradeLevel",
      "children": [
        {
          "name": "0",
          "slug": "0"
        },
        {
          "name": "1",
          "slug": "1"
        },
        {
          "name": "2",
          "slug": "2"
        },
        {
          "name": "3",
          "slug": "3"
        },
        {
          "name": "4",
          "slug": "4"
        },
        {
          "name": "5",
          "slug": "5"
        },
        {
          "name": "6",
          "slug": "6"
        },
        {
          "name": "7",
          "slug": "7"
        },
        {
          "name": "8",
          "slug": "8"
        },
        {
          "name": "9",
          "slug": "9"
        },
        {
          "name": "10",
          "slug": "10"
        },
        {
          "name": "11",
          "slug": "11"
        },
        {
          "name": "12",
          "slug": "12"
        }
      ]
    }
  ]

  return (
    <div className="resources-search-panel">
      <div className="resources-search-panel__filters">
        <h2 className="resources-search-panel__filters-title">Filter</h2>
        <div className="resources-search-panel__filter-groups">

          {
            filters.map((group, i) => {
              return (
                <ResourcesFilterGroup key={i} groupID={i} group={group} handleFilterClick={handleFilterClick} />
              )
            })
          }

        </div>
      </div>
    </div>
  )
}
