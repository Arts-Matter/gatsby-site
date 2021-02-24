import React, { useState } from "react"
import { useWindowSize } from "./hooks"
import { addOrdinalToGrade } from "./utils.js"

import "./resourcesFilterGroup.scss"

const ResourcesFilterGroup = ({ groupID, group, handleFilterClick }) => {
  const [groupExpanded, setGroupExpanded] = useState(false)
  const { width } = useWindowSize()

  const handleGroupExpanderClick = () => {
    setGroupExpanded(!groupExpanded)
  }

  return (
    <div className="resources-filter-group">
      <h3 className="resources-filter-group__title">
        {width > 889 ? (
          <span>{group.groupName}</span>
        ) : (
          <button
            className="resources-filter-group__button"
            aria-expanded={groupExpanded}
            aria-controls={"filter-group-" + groupID}
            onClick={handleGroupExpanderClick}
          >
            {group.groupName}
            <span
              className="resources-filter-group__button-indicator"
              aria-hidden="true"
            ></span>
          </button>
        )}
      </h3>
      <div
        className={
          "resources-filter-group__drawer " +
          (groupExpanded ? "resources-filter-group__drawer--is-open" : "")
        }
        id={"filter-group-" + groupID}
      >
        <ul
          className={
            "resources-filter-group__list " +
            (group.groupSlug === "gradeLevel"
              ? "resources-filter-group__list--3-up"
              : "")
          }
        >
          {group.children.map((child, i) => {
            return (
              <li
                key={i}
                onClick={e => handleFilterClick(e, group.groupSlug, child.slug)}
              >
                <label className="fancy-checkbox">
                  <input
                    type="checkbox"
                    name={group.groupSlug}
                    value={child.slug}
                  />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">
                    {group.groupSlug === "gradeLevel"
                      ? addOrdinalToGrade(parseInt(child.name))
                      : child.name}
                  </span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ResourcesFilterGroup
