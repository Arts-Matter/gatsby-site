import React from "react"
import { addOrdinalToGrade } from "./utils.js"
import "./resourcesSearchPanel.scss"

export default function ResourcesSearchPanel() {
  const filters = [
    {
      "groupName": "Subject Area",
      "groupSlug": "subjectArea",
      "children": [
        "Math",
        "English/Language Arts",
        "Science",
        "Social Studies"
      ]
    },
    {
      "groupName": "Media Arts Strain",
      "groupSlug": "mediaArtsStrain",
      "children": [
        "Design",
        "Photography",
        "Animation",
        "Film",
        "Game Design"
      ]
    },
    {
      "groupName": "Grade Level",
      "groupSlug": "gradeLevel",
      "children": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
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
                              <input type="checkbox" name={group.groupSlug} value={child} />
                              <span className="fancy-checkbox__indicator"></span>
                              <span className="fancy-checkbox__text">{group.groupSlug === "gradeLevel" ? addOrdinalToGrade(parseInt(child)) : child}</span>
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
