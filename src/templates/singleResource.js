import React, { useState } from "react"
import { graphql } from "gatsby"
import { Dialog } from "@reach/dialog"
import { BLOCKS } from "@contentful/rich-text-types"
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

  const descriptionBody = resourceData.childContentfulResourceBucketDescriptionRichTextNode
    ? resourceData.childContentfulResourceBucketDescriptionRichTextNode.json
    : null
  const url = typeof window !== `undefined` ? window.location.href : null

  const returnHeaderLeft = () => {
    return (
      <React.Fragment>
        {title && <h1>{title}</h1>}
        {width < 890 && returnHeaderRight()}
        {descriptionBody && (
          <div className="single-resource__rich-text-container">
            {documentToReactComponents(descriptionBody, options)}
          </div>
        )}
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

  const handleEnterOpenImage = e => {
    if (e.keyCode === 13) {
      const imgSrc = e.target.children[0]
        ? e.target.children[0].getAttribute("src")
        : null

      if (imgSrc !== null && selectedImage == null) {
        setSelectedImage(imgSrc)
        setShowLightbox(true)
      } else if( selectedImage !== null) setSelectedImage(null)
    }
  }

  const handleCloseImage = e => {
    e.preventDefault()
    setShowLightbox(false)
    setSelectedImage(null)
  }

  // Needed to be able to open and close images with keys
  const handleKeyCloseImage = e => {
    e.preventDefault()
    setShowLightbox(false)
    // doesnt reset selected image so that the enter key 
    // doesnt trigger the image to be reopened in a loop
  }

  // Used with student artwork in lightbox dialog
  const handleNextImage = action => {
    const curIndex = findImage(selectedImage)
    if (curIndex === -1) return

    if (action === "next" && curIndex !== studentArtwork.length - 1) {
      if (
        studentArtwork[curIndex + 1].file &&
        studentArtwork[curIndex + 1].file.url
      ) {
        setSelectedImage(studentArtwork[curIndex + 1].file.url)
      }
    } else if (action === "next") {
      if (studentArtwork[0].file && studentArtwork[0].file.url) {
        setSelectedImage(studentArtwork[0].file.url)
      }
    } else if (action === "previous" && curIndex !== 0) {
      if (
        studentArtwork[curIndex - 1].file &&
        studentArtwork[curIndex - 1].file.url
      ) {
        setSelectedImage(studentArtwork[curIndex - 1].file.url)
      }
    } else if (action === "previous") {
      if (
        studentArtwork[studentArtwork.length - 1].file &&
        studentArtwork[studentArtwork.length - 1].file.url
      ) {
        setSelectedImage(studentArtwork[studentArtwork.length - 1].file.url)
      }
    }
  }

  // find a photo by src in student artwork
  const findImage = src => {
    const image = studentArtwork.findIndex(photo => {
      if (
        photo.file &&
        photo.file.url &&
        (photo.file.url === src ||
          photo.file.url === src.replace("http:", "") ||
          photo.file.url === src.replace("https:", ""))
      ) {
        return true
      } else return false
    })

    return image
  }

  // Arrow buttons for lightbox dialog
  const arrowButton = type => {
    const classes = ["single-resource__arrow-img"]

    if (type === "previous") {
      classes.push("single-resource__arrow-img--previous")
    } else if (type === "next") {
      classes.push("single-resource__arrow-img--next")
    }

    return (
      <button
        onClick={() =>
          handleNextImage(type === "previous" ? "previous" : "next")
        }
        className="single-resource__lightbox-nav"
      >
        <div className={classes.join(" ")}></div>
      </button>
    )
  }

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
              className="single-resource__rich-img"
              src={src}
              alt={`${title ? title : ""}`}
            />
          )
      },
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
            onDismiss={() => {
              setShowLightbox(false)
              setSelectedImage(null)
            }}
          >
            <button
              className="single-resource__lightbox-button"
              onClick={handleCloseImage}
              onKeyPress={handleKeyCloseImage}
            ><span class="a11y-hidden">Close Image</span></button>
            <div className="single-resource__lightbox-container">
              {arrowButton("previous")}
              <div
                className="single-resource__lightbox-img"
                style={{ backgroundImage: `url("${selectedImage}")` }}
              ></div>
              {arrowButton("next")}
            </div>
          </Dialog>
        )}
        <SocialMediaBar title={title} url={url} hashtags={["arts-matter"]} />
        {instructionalResources && instructionalResources.length > 0 && (
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
                } else {
                  return null
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
                    onKeyUp={handleEnterOpenImage}
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
          childContentfulResourceBucketDescriptionRichTextNode {
            json
          }
        }
      }
    }
  }
`
