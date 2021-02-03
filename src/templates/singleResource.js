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
          {videos && videos.map((video, i) => <div key={i}>{video}</div>)}
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
            {instructionalResources.map(resource => {
              const { contentType, fileName, url } = resource.file

              if (url && fileName) {
                return (
                  <div className="single-resource__resource-container">
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
