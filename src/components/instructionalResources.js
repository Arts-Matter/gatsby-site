import React from "react"
import PropTypes from "prop-types"
import "./instructionalResources.scss"

export default function InstructionalResources({ resources }) {
  return (
    <div className="single-resource__resources">
      <h4>Instructional Resources</h4>
      <div className="single-resource__resources-wrapper">
        {resources.map((resource, i) => {
          const { contentType, fileName, url } = resource.file

          if (url && fileName) {
            return (
              <div key={i} className="single-resource__resource-container">
                <div className="single-resource__resource-image">
                  File Logo Here
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {fileName}
                </a>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

InstructionalResources.propTypes = {
  resources: PropTypes.array.isRequired,
}
