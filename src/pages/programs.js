import React from "react"
import { Link } from "gatsby"
import "./programs.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import ProgramsBottomHeaderArea from "../components/programsBottomHeaderArea"

const title = "Programs"
const bottom = <ProgramsBottomHeaderArea />

const Page = () => (
  <Layout active="programs">
    <SEO title={title} />
    <HeaderArea topLeft="Programs" backgroundClass="aqua" bottom={bottom} />
  </Layout>
)

export default Page
