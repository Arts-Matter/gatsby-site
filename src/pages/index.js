import React from "react"
import SEO from "../components/seo"
import ReactFullpage from "@fullpage/react-fullpage"
import Wrapper from "../components/homepage/wrapper"
import AboutSection from "../components/homepage/about"
import PillarsSection from "../components/homepage/pillars"
import ResourcesSection from "../components/homepage/resources"
import ProgrammingSection from "../components/homepage/programming"
import ContactSection from "../components/homepage/contact"
import "../components/layout.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ReactFullpage
      scrollingSpeed={700}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section section--about">
              <Wrapper bgColor="magenta">
                <AboutSection />
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
                <ProgrammingSection />
              </Wrapper>
            </div>
            <div className="section section--contact">
              <Wrapper bgColor="sunflower">
                <ContactSection />
              </Wrapper>
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  </>
)

export default IndexPage
