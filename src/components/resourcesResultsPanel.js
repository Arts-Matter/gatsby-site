import React from "react"
import { addOrdinalToGrade } from "./utils.js"
import "./resourcesResultsPanel.scss"

const ResourcesResultsPanel = ({ resources }) => (
  <div className="resources-results">

    { resources.map(({ node }) => {
      return (
        <div key={node.id} className="resource">
          <div className="resource__columns">

            <div className="resource__col">
              <div className="resource__meta-list">
                {
                  node.subjectArea &&
                  <span className="resource__meta-item">
                    { node.subjectArea.map((subject, i) => {
                      let preText = ''

                      if ( i > 0 ) {
                        preText = ' & '
                      }

                      return <span key={i}>{ preText + subject }</span>
                    })}
                  </span>
                }
                {node.gradeLevel !== null &&
                  <span className="resource__meta-item">{ addOrdinalToGrade( node.gradeLevel ) }</span>
                }
                {
                  node.mediaArtsStrain &&
                  <span className="resource__meta-item resource__meta-item--strain">
                    { node.mediaArtsStrain.map((strain, i) => {
                      let preText = ''

                      if ( i > 0 ) {
                        preText = ' & '
                      }

                      return <span key={i}>{ preText + strain }</span>
                    })}
                  </span>
                }
              </div>
              <h2 className="resource__title">{node.title}</h2>
              {node.description && 
                <div className="resource__description">
                  <p>{node.description.description}</p>
                </div>
              }
            </div>

            <div className="resource__col">
              {node.resourceFiles &&
                <div className="resource__downloads">
                  <h3 className="resource__downloads-title">Downloads</h3>
                  <ul className="resource__files-list">
                    { node.resourceFiles.map((resource) => {
                      return (
                        <li key={resource.id} className="resource__files-list-item">
                          <a href={resource.file.file.url} download="" target="_blank" rel="noopener noreferrer">
                            {resource.title}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              }
            </div>

          </div>
        </div>
      )
    })}

  </div>
)

export default ResourcesResultsPanel
