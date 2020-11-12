import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactFullpage from '@fullpage/react-fullpage'
import AboutSection from '../components/homepage/about'

const IndexPage = () => (
  <Layout active="home">
    <SEO title="Home" />
    <ReactFullpage
    scrollingSpeed = {1000}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section about">
            <AboutSection />
          </div>
          <div className="section pillars">
            <p>Section Pillars</p>
          </div>
          <div className="section resources">
            <p>Section Resources</p>
          </div>
          <div className="section programming">
            <p>Section Programming</p>
          </div>
          <div className="section contact">
            <p>Section Contact</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
    />
  </Layout>
)

export default IndexPage
