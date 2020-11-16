import React from "react"
import { Link } from "gatsby"
import "./programs.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import ProgramsBottomHeaderArea from "../components/programsBottomHeaderArea"
import StudentEngagementOpportunities from "../components/studentEngagementOpportunities"
import TeacherDevelopment from "../components/teacherDevelopment"
import ProgramResources from "../components/programResources"

const title = "Programs"
const bottom = <ProgramsBottomHeaderArea />

const Page = () => (
  <Layout active="programs" bgColor="geo">
    <SEO title={title} />
    <HeaderArea topLeft="Programs" backgroundClass="aqua" bottom={bottom} />
    <StudentEngagementOpportunities />
    <TeacherDevelopment />
    <ProgramResources />
  </Layout>
)

export default Page
