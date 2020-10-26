import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TeacherDevelopment from "../components/teacherDevelopment"

const title = "Programs"

const Page = () => (
  <Layout active="programs">
    <SEO title={title} />
    <TeacherDevelopment />
  </Layout>
)

export default Page
