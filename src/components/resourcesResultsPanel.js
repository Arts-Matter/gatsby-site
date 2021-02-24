import React from "react"
import Button from "./button"
import { determineSlug } from "./helpers"
import "./resourcesResultsPanel.scss"

const ResourcesResultsPanel = ({ resources }) => {
  return (
    <div className="resources-results">
      {resources.map(({ node }) => {
        const slug = node.slug ? node.slug : null
        const title = node.title ? node.title : null
        const contentful_id = node.contentful_id ? node.contentful_id : null
        const determinedSlug = determineSlug(slug, title, contentful_id)
        return (
          <div key={node.id} className="resource">
            <div className="resource__columns">
              {node.featuredImage !== null && node.featuredImage.file.url && (
                <div className="resource__col">
                  <div
                    className="resource__featured-image"
                    style={{
                      backgroundImage: `url(${node.featuredImage.file.url})`,
                    }}
                  ></div>
                </div>
              )}

              <div className="resource__col resource__col--left-justify">
                <h2 className="resource__title">{node.title}</h2>
                <div className="resource__meta-list">
                  {node.subjectArea && (
                    <span className="resource__meta-item">
                      {node.subjectArea.map((subject, i) => {
                        let preText = ""

                        if (i > 0) {
                          preText = " & "
                        }

                        return <span key={i}>{preText + subject}</span>
                      })}
                    </span>
                  )}
                  {node.mediaArtsDiscipline && (
                    <span className="resource__meta-item">
                      {node.mediaArtsDiscipline.map((discipline, i) => {
                        let preText = ""

                        if (i > 0) {
                          preText = " & "
                        }

                        return <span key={i}>{preText + discipline}</span>
                      })}
                    </span>
                  )}
                  {node.gradeLevel !== null && node.gradeLevel.length > 0 && (
                    <div className="resource__meta-item">
                      {node.gradeLevel.join(", ")}
                    </div>
                  )}
                </div>
                {node.description && (
                  <div className="resource__description">
                    <p>{node.description.description}</p>
                  </div>
                )}
                {determinedSlug && (
                  <Button
                    url={`/resources/${determinedSlug}`}
                    text="Learn More"
                  />
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ResourcesResultsPanel
