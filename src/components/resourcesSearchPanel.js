import React from "react"
import { addOrdinalToGrade } from "./utils.js"
import "./resourcesSearchPanel.scss"

export default function ResourcesSearchPanel({ handleFilterClick }) {
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
      "groupName": "Media Arts Strain",
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
                <div key={i} className="resources-filter-group">
                  <h3 className="resources-filter-group__title">{group.groupName}</h3>
                  <ul className={"resources-filter-group__list " + (group.groupSlug === "gradeLevel" ? "resources-filter-group__list--3-up" : "")}>
                    {
                      group.children.map((child, i) => {
                        return (
                          <li key={i}>
                            <label className="fancy-checkbox">
                              <input type="checkbox" name={group.groupSlug} value={child.slug} onClick={ (e) => handleFilterClick(e, group.groupSlug, child.slug)} />
                              <span className="fancy-checkbox__indicator"></span>
                              <span className="fancy-checkbox__text">{group.groupSlug === "gradeLevel" ? addOrdinalToGrade(parseInt(child.name)) : child.name}</span>
                            </label>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }

        </div>
      </div>
      <div className="resources-search-panel__search-bar">
        <h2 className="resources-search-panel__search-bar-title">or Search by Standard</h2>
        <form className="resources-search-panel__search-bar-form">
          <input placeholder="i.e. CCSS.MATH.CONTENT.K.CC.A.1" name="standard" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
