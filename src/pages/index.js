import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ReactFullpage from "@fullpage/react-fullpage"
import Wrapper from "../components/homepage/wrapper"
import AboutSection from "../components/homepage/about"
import PillarsSection from "../components/homepage/pillars"
import ResourcesSection from "../components/homepage/resources"
import ProgrammingSection from "../components/homepage/programming"
import ContactSection from "../components/homepage/contact"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  const { entries } = data.allContentfulListOfThings.edges[0].node
  const images = entries.reduce((images, curImage) => {
    const caption = curImage.description
      ? curImage.description.content[0].content[0].value
      : null
    const src = curImage.image ? curImage.image.fixed.src : null
    const title = curImage.title

    images.push({ src, title, caption })

    return images
  }, [])

  return (
    <>
      <SEO title="Home" />
      <ReactFullpage
        scrollingSpeed={700}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section section--about">
                <Wrapper bgColor="magenta">
                  <AboutSection images={images ? images.slice(0, 3) : null} />
                </Wrapper>
              </div>
              <div className="section section--pillars">
                <Wrapper bgColor="tomato">
                  <PillarsSection />
                </Wrapper>
              </div>
              <div className="section section--resources">
                <Wrapper bgColor="aqua">
                  <ResourcesSection />
                </Wrapper>
              </div>
              <div className="section section--programming">
                <Wrapper bgColor="geo">
                  <ProgrammingSection
                    images={images ? images.slice(3, 6) : null}
                  />
                </Wrapper>
              </div>
              <div className="section section--contact">
                <Wrapper bgColor="sunflower" header={false}>
                  <ContactSection />
                </Wrapper>
              </div>
              <Footer classes="section fp-auto-height" />
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
  )
}

export const query = graphql`
  {
    allContentfulListOfThings(
      filter: { listName: { eq: "Home page image galleries" } }
    ) {
      edges {
        node {
          entries {
            ... on ContentfulImageWithText {
              image {
                fixed(quality: 100, width: 750) {
                  src
                }
              }
              description {
                content {
                  content {
                    value
                  }
                }
              }
              title
            }
          }
        }
      }
    }
  }
`

export default IndexPage
