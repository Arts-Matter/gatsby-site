import React, { useState } from "react"
import { graphql } from "gatsby"
import { Dialog } from "@reach/dialog"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "@reach/dialog/styles.css"
import "./singleResource.scss"

import { useWindowSize } from "../components/hooks"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeaderArea from "../components/headerArea"
import SocialMediaBar from "../components/socialMediaBar"
import ImageGallery from "../components/imageGallery"
import InstructionalResources from "../components/instructionalResources"

export default function SingleResource({ data, pageContext }) {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const { width } = useWindowSize()
  const resourceData = data.allContentfulResourceBucket.edges[0].node

  const {
    classroomPhotos,
    featuredImage,
    instructionalResources,
    studentArtwork,
    title,
    videos,
    gradeLevel,
    mediaArtsDiscipline,
  } = resourceData
  const excerptBody = resourceData.childContentfulResourceBucketExcerptRichTextNode
    ? resourceData.childContentfulResourceBucketExcerptRichTextNode.json
    : null
  const url = typeof window !== `undefined` ? window.location.href : null

  const returnHeaderLeft = () => {
    return (
      <React.Fragment>
        {title && <h1>{title}</h1>}
        {width < 890 && returnHeaderRight()}
        {excerptBody && documentToReactComponents(excerptBody, options)}
      </React.Fragment>
    )
  }

  const returnHeaderRight = () => {
    return (
      <React.Fragment>
        {featuredImage && (
          <ImageGallery images={buildGalleryImages(classroomPhotos)} />
        )}
      </React.Fragment>
    )
  }

  const getEmbedUrl = url => {
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
      // We need to add /embed
      urlArr.splice(ytIndex + 1, 0, "embed")
      return urlArr.join("/")
    } else if (ytIndex && embedModeIndex >= 0) {
      // Url is already in the correct format
      return url
    } else {
      // url is invalid (not youtube or bad format)
      return false
    }
  }

  const buildGalleryImages = images => {
    return images.map(image => {
      const src = image.fixed ? image.fixed.src : null
      const title = image.title ? image.title : null
      const caption = image.description ? image.description : null

      return {
        src,
        title,
        caption,
      }
    })
  }

  const handleOpenImage = e => {
    e.preventDefault()
    const src = e.target.src ? e.target.src : null

    if (src) {
      setShowLightbox(true)
      setSelectedImage(src)
    }
  }

  const handleCloseImage = e => {
    e.preventDefault()
    setShowLightbox(false)
    setSelectedImage(null)
  }

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="single-resource__rich-text">{children}</p>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="single-resource__rich-li">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="single-resource__rich-quote">
          {children}
        </blockquote>
      ),
      [INLINES.ENTRY_HYPERLINK]: (node, children) => (
        // will need to build out this logic further
        <a href={`/pages/temp`}>{children}</a>
      ),
    },
  }

  return (
    <Layout active="single-resource" bgColor="magenta">
      <SEO title="Resource" />
      <HeaderArea
        topLeft={returnHeaderLeft()}
        topRight={width > 889 ? returnHeaderRight() : null}
        customTop={true}
      />
      <div className="single-resource__container">
        {showLightbox && selectedImage && (
          <Dialog
            className="single-resource__lightbox"
            aria-label="image dialog"
          >
            <button
              className="single-resource__lightbox-button"
              onClick={handleCloseImage}
            ></button>
            <div
              className="single-resource__lightbox-img"
              style={{ backgroundImage: `url("${selectedImage}")` }}
            ></div>
          </Dialog>
        )}
        <SocialMediaBar title={title} url={url} hashtags={["arts-matter"]} />
        {instructionalResources.length > 0 && (
          <InstructionalResources
            resources={instructionalResources}
            gradeLevels={gradeLevel}
            mediaArtsDisciplines={mediaArtsDiscipline}
          />
        )}
        {/* 
              |     Move these sections to components later   |
              V                                               V      */}
        {videos && (
          <div className="single-resource__videos">
            <h2>Videos</h2>
            <div className="single-resource__videos-container">
              {videos.map((video, i) => {
                const embedUrl = getEmbedUrl(video)

                if (embedUrl !== false) {
                  return (
                    <div key={i} className="single-resource__video-wrapper">
                      <iframe
                        title={i}
                        className="single-resource__video"
                        src={getEmbedUrl(video)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                        allowFullScreen={true}
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                      >
                        Your browser doesn't support IFrame :/
                      </iframe>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        )}
        {studentArtwork && (
          <div className="single-resource__artwork">
            <h2>Student Artwork</h2>
            <div className="single-resource__artwork-wrapper">
              {studentArtwork.map((artwork, i) => {
                return (
                  <button
                    key={i}
                    className="single-resource__artwork-container"
                    onClick={handleOpenImage}
                  >
                    <img
                      className="single-resource__artwork-img"
                      src={artwork.file.url}
                      alt={artwork.title ? artwork.title : ""}
                    />
                  </button>
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
            title
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
          childContentfulResourceBucketExcerptRichTextNode {
            json
          }
        }
      }
    }
  }
`
