import React from "react"
import { graphql } from "gatsby"
import "./singleResource.scss"
import { useWindowSize } from "../components/hooks"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeaderArea from "../components/headerArea"
import SocialMediaBar from "../components/socialMediaBar"

export default function SingleResource({ data, pageContext }) {
  const { width } = useWindowSize()
  const resourceData = data.allContentfulResourceBucket.edges[0].node
  const {
    classroomPhotos,
    description,
    featuredImage,
    gradeLevel,
    instructionalResources,
    mediaArtsDiscipline,
    studentArtwork,
    subjectArea,
    title,
    videos,
  } = resourceData
  const url = typeof window !== `undefined` ? window.location.href : null

  const returnHeaderLeft = () => {
    return (
      <React.Fragment>
        {title && <h1>{title}</h1>}
        {width < 890 && returnHeaderRight()}
        {description && <h4>{description.description}</h4>}
      </React.Fragment>
    )
  }

  const returnHeaderRight = () => {
    return (
      <React.Fragment>
        {featuredImage && (
          <div className="top__image-container">
            <div
              className="top__image"
              style={{
                backgroundImage: `url("${featuredImage.file.url}")`,
              }}
            ></div>
          </div>
        )}
      </React.Fragment>
    )
  }

  const getEmbedLink = url => {
    const urlArr = url.split("/")
    // We need this index to insert some things after the url base
    // Some links are formatted as youtu.be
    const ytIndex = urlArr.findIndex(e => e.includes("youtu"))
    const alternateBaseUrlIndex = urlArr.findIndex(e => e.includes("youtu.be"))
    const watchModeIndex = urlArr.findIndex(e => e.includes("watch"))
    const embedModeIndex = urlArr.findIndex(e => e.includes("embed"))

    // URL is format youtu.be, we need to update that
    if (alternateBaseUrlIndex >= 0) {
      urlArr.splice(ytIndex, 1, "youtube.com")
    }

    // URL has /watch we need to remove that
    if (watchModeIndex >= 0) {
      urlArr.splice(watchModeIndex, 1)
    }

    if (ytIndex >= 0 && embedModeIndex === -1) {
      urlArr.splice(ytIndex + 1, 0, "embed")
      return urlArr.join("/")
    } else if (ytIndex && embedModeIndex >= 0) {
      // Url is already in the correct format
      return url
    } else {
      // url is invalid
      return false
    }
  }

  console.log(data)

  return (
    <Layout active="single-resource" bgColor="magenta">
      <SEO title="Resource" />
      <HeaderArea
        topLeft={returnHeaderLeft()}
        topRight={width > 889 ? returnHeaderRight() : null}
        customTop={true}
      />
      <div className="single-resource__container">
        <SocialMediaBar title={title} url={url} hashtags={["arts-matter"]} />
        {/* 
              |     Move these sections to components later   |
              V                                               V      */}
        <div className="single-resource__videos">
          <h4>Videos</h4>
          {videos &&
            videos.map((video, i) => (
              <iframe
                className="single-resource__video"
                src={getEmbedLink(video)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                key={i}
              ></iframe>
            ))}
        </div>
        {studentArtwork && (
          <div className="single-resource__artwork">
            <h4>Student Artwork</h4>
            <div className="single-resource__artwork-wrapper">
              {studentArtwork.map((artwork, i) => {
                return (
                  <div key={i} className="single-resource__artwork-container">
                    <img
                      className="single-resource__artwork-img"
                      src={artwork.file.url}
                      alt={artwork.title ? artwork.title : ""}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}
        {instructionalResources && (
          <div className="single-resource__resources">
            <h4>Instructional Resources</h4>
            {instructionalResources.map((resource, i) => {
              const { contentType, fileName, url } = resource.file

              if (url && fileName) {
                return (
                  <div key={i} className="single-resource__resource-container">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {fileName}
                    </a>
                  </div>
                )
              }

              return
            })}
          </div>
        )}
        {classroomPhotos && (
          <div className="single-resource__classroom-photos">
            <h4>Classroom Photos</h4>
            <div className="single-resource__classroom-wrapper">
              {classroomPhotos.map((photo, i) => {
                return (
                  <div key={i} className="single-resource__classroom-container">
                    <img
                      className="single-resource__classroom-img"
                      src={photo.fixed.src}
                      alt={photo.title ? photo.title : ""}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SingleResourceQuery($id: String!) {
    allContentfulResourceBucket(filter: { contentful_id: { eq: $id } }) {
      edges {
        node {
          classroomPhotos {
            fixed(quality: 100, width: 720) {
              src
            }
            description
            title
          }
          description {
            description
          }
          gradeLevel
          featuredImage {
            file {
              url
            }
          }
          instructionalResources {
            file {
              contentType
              fileName
              url
            }
            title
          }
          mediaArtsDiscipline
          subjectArea
          title
          studentArtwork {
            description
            title
            file {
              contentType
              fileName
              url
            }
          }
          videos
        }
      }
    }
  }
`
