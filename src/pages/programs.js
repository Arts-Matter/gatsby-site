import React from "react"
import "./programs.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import StudentEngagementOpportunities from "../components/studentEngagementOpportunities"
import TeacherDevelopment from "../components/teacherDevelopment"
import ProgramResources from "../components/programResources"

const title = "Programs"

const Page = () => (
  <Layout active="programs" bgColor="geo">
    <SEO title={title} />
    <HeaderArea topLeft="Programs" backgroundClass="aqua" />
    <StudentEngagementOpportunities />
    <TeacherDevelopment />
    <ProgramResources />
  </Layout>
)

export default Page
