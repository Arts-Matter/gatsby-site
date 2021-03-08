import React from "react"
import Button from "./button"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { determineSlug } from "./helpers"
import "./resourcesResultsPanel.scss"

const ResourcesResultsPanel = ({ resources }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        let src, title

        if (
          node.data &&
          node.data.target &&
          node.data.target.fields &&
          node.data.target.fields.file
        ) {
          src = node.data.target.fields.file["en-US"]
            ? node.data.target.fields.file["en-US"].url
            : null
          title = node.data.target.fields.title
            ? node.data.target.fields.title["en-US"]
            : null
        }
        if (src)
          return (
            <img
              className="resource__col-img"
              src={src}
              alt={`${title ? title : ""}`}
            />
          )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="resource__rich-text">{children}</p>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="resource-rich-li">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="resource__rich-quote">{children}</blockquote>
      ),
      // [INLINES.ENTRY_HYPERLINK]: (node, children) => (
      //   // will need to build out this logic further
      //   <a href={`/pages/temp`}>{children}</a>
      // ),
    },
  }

  const renderDescription = (descBody, excerptBody) => {
    if (descBody) {
      return documentToReactComponents(descBody.json, options)
    }

    if (excerptBody) {
      return documentToReactComponents(excerptBody.json, options)
    }
  }

  return (
    <div className="resources-results">
      {resources.map(({ node }) => {
        const slug = node.slug ? node.slug : null
        const title = node.title ? node.title : null
        const contentful_id = node.contentful_id ? node.contentful_id : null
        const determinedSlug = determineSlug(slug, title, contentful_id)
        const descBody = node.childContentfulResourceBucketDescriptionRichTextNode
          ? node.childContentfulResourceBucketDescriptionRichTextNode
          : null
        const excerptBody = node.childContentfulResourceBucketExcerptRichTextNode
          ? node.childContentfulResourceBucketExcerptRichTextNode
          : null
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
                {node.childContentfulResourceBucketDescriptionRichTextNode &&
                  renderDescription(descBody, excerptBody)}
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
