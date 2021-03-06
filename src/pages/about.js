import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import AboutBottomHeaderArea from "../components/aboutBottomHeaderArea"
import History from "../components/history"
import ProgramPillars from "../components/programPillars"
import AboutTeam from "../components/aboutTeam"

const title = "About"
const bottom = <AboutBottomHeaderArea />

const Page = () => {
  return (
    <Layout active="about" bgColor="aqua">
      <SEO title={title} />
      <HeaderArea 
        topLeft="About" 
        bottom={bottom} 
        backgroundClass="magenta" />
      <History />
      <ProgramPillars />
      <AboutTeam />
    </Layout>
  )
}

export default Page
