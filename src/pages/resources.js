import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import ResourcesSearchPanel from "../components/resourcesSearchPanel"
import ResourcesResultsPanel from "../components/resourcesResultsPanel"

import "../components/resources.scss"

const title = "Resources"
const topRight = "Lesson plans, activity guides, instructional media, student worksheets, assessment rubrics, and more provide a standards-based framework for teaching media arts in the classroom with the structure needed for students to learn."

const Page = () => (
  <Layout active="resources">
    <SEO title={title} />
    <HeaderArea topLeft={title} topRight={topRight} />
    <ResourcesSearchPanel />
    <ResourcesResultsPanel />
  </Layout>
)

export default Page
