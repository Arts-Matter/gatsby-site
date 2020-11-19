import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import ContactBottomHeaderArea from "../components/contactBottomHeaderArea"


const title = "Contact"
const bottom = <ContactBottomHeaderArea />

const Page = () => (
  <Layout active="contact" bgColor="tomato">
    <SEO title={title} />
    <HeaderArea
      topLeft="Contact Us"
      bottom={bottom}
      backgroundClass="sunflower"
    />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default Page
