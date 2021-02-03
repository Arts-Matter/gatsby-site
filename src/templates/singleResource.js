import React from "react"
import { graphql } from "gatsby"
import "./singleNews.scss"
// import { BLOCKS } from "@contentful/rich-text-types"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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
        {/* {(date || byline) && (
          <h6>
            {`${date ? date : ""}`}&nbsp;&nbsp;{`${date && byline ? "|" : ""}`}
            &nbsp;&nbsp;By {`${byline ? byline : ""}`}
          </h6>
        )} */}
        {/* {width < 890 && returnHeaderRight()} */}
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

  // const NewsImage = ({ file, description }) => {
  //   return (
  //     <React.Fragment>
  //       {(file || description) && (
  //         <div className="news-article__image">
  //           {file && (
  //             <img
  //               src={file["en-US"].url}
  //               alt={description ? description["en-US"] : ""}
  //             />
  //           )}
  //           {description && <div>{description["en-US"]}</div>}
  //         </div>
  //       )}
  //     </React.Fragment>
  //   )
  // }

  // const options = {
  //   renderNode: {
  //     [BLOCKS.EMBEDDED_ASSET]: node => {
  //       let file, description

  //       if (node.data && node.data.target && node.data.target.fields) {
  //         file = node.data.target.fields.file
  //         description = node.data.target.fields.description
  //       }
  //       return <NewsImage file={file} description={description} />
  //     },
  //     [BLOCKS.PARAGRAPH]: (node, children) => (
  //       <p className="news-article__text">{children}</p>
  //     ),
  //     [BLOCKS.LIST_ITEM]: (node, children) => (
  //       <li className="news-article__li">{children}</li>
  //     ),
  //     [BLOCKS.QUOTE]: (node, children) => (
  //       <blockquote className="news-article__quote">{children}</blockquote>
  //     ),
  //   },
  // }

  console.log(data)

  return (
    <Layout active="news-article" bgColor="magenta">
      <SEO title="Resource" />
      <HeaderArea
        topLeft={returnHeaderLeft()}
        topRight={width > 889 ? returnHeaderRight() : null}
        customTop={true}
      />
      <div className="news-article__container">
        <SocialMediaBar title={title} url={url} hashtags={["arts-matter"]} />
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
            fixed {
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
