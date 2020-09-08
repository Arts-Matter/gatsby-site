import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"

const title = "About"
const top = (
  <>
    <div className="top__left">
      <h1>About</h1>
    </div>
    <div className="top__right">
      <h3>
        ArtsMatter draws upon a dynamic catalogue of content provided by top
        artists and creators to produce high-impact arts education programming
        for Los Angeles schools.
      </h3>
    </div>
  </>
)

const bottom = (
  <>
    <div className="bottom__left">
      <span class="mission">Mission Statement</span>
      <div>
        <p className="rich-text">
          Los Angeles is the world capital of media and entertainment, yet most
          LA County schools do not prepare students to take on jobs in these
          industries. ArtsMatter addresses these gaps by creating and sharing
          educational programming based in media arts to increase exposure and
          access to career pathways and equip students of color with the skills
          they need for success in the local creative economy.{" "}
        </p>
        <p className="rich-text">
          ArtsMatter creates standards-based curriculum and instructional
          materials to be paired with hands-on Professional Development training
          for teachers to increase student engagement in schools while building
          teachers’ capacity to integrate arts learning in their classrooms.
          Trained teachers then become ambassadors in their larger school
          communities to activate county-wide impact projects to advance media
          arts education not only in Los Angeles, but in every city across the
          country.{" "}
        </p>
      </div>
    </div>
    <div className="bottom__right">
      <div className="image-container">
        <div className="image"></div>
      </div>
    </div>
  </>
)

const Page = () => (
  <Layout active="about">
    <SEO title={title} />
    <HeaderArea active="about" top={top} bottom={bottom} />
  </Layout>
)

export default Page
