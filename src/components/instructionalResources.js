import React from "react"
import PropTypes from "prop-types"
import "./instructionalResources.scss"

export default function InstructionalResources({
  resources,
  gradeLevels,
  mediaArtsDisciplines,
}) {
  return (
    <div className="instructional-resources">
      <div className="instructional-resources__columns">
        <div className="instructional-resources__col">
          <div className="instructional-resources__meta-list">
            <h2 className="instructional-resources__title">
              Instructional Resources
            </h2>
            <ul className="instructional-resources__list">
              {mediaArtsDisciplines &&
                mediaArtsDisciplines.map((discipline, i) => {
                  return (
                    <li key={i} className="instructional-resources__list-item">
                      {discipline}
                    </li>
                  )
                })}
            </ul>
            <ul className="instructional-resources__list">
              {gradeLevels &&
                gradeLevels.map((grade, i) => {
                  return (
                    <li key={i} className="instructional-resources__list-item">
                      {grade}
                    </li>
                  )
                })}
            </ul>
            <p>
              Aliquip et fugiat proident culpa fugiat fugiat culpa in
              exercitation aliquip minim nisi sunt culpa.Excepteur quis nisi
              incididunt amet velit consequat proident duis laborum do.
            </p>
          </div>
        </div>
        <div className="instructional-resources__col">
          <div className="instructional-resources__downloads">
            <h3 className="instructional-resources__downloads-title">
              Downloads
            </h3>
            <ul className="instructional-resources__files-list">
              {resources.map((resource, i) => {
                const { fileName, url } = resource.file

                if (fileName && url) {
                  return (
                    <li
                      key={`${fileName ? fileName : ""}${i}`}
                      className="instructional-resources__files-list-item"
                    >
                      <a
                        href={url}
                        download=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {fileName}
                      </a>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

InstructionalResources.propTypes = {
  resources: PropTypes.array.isRequired,
  gradeLevels: PropTypes.array,
  mediaArtsDisciplines: PropTypes.array,
}
