import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import ContactBottomHeaderArea from "../components/contactBottomHeaderArea"
import ContactPageTeam from "../components/contactPageTeam"


const title = "Contact"
const bottom = <ContactBottomHeaderArea />

const Page = () => (
  <Layout active="contact" bgColor="tomato">
    <SEO title={title} />
    <HeaderArea
      topRight=" "
      topLeft="Contact Us"
      bottom={bottom}
      backgroundClass="sunflower"
    />
    <ContactPageTeam />
  </Layout>
)

export default Page
