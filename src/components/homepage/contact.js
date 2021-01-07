import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FooterContactForm from "../footerContactForm"
import Quotes from "../quotesBasic"
import "./contact.scss"

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulListOfThings(
        filter: { listName: { eq: "About page quotes" } }
      ) {
        edges {
          node {
            listName
            entries {
              ... on ContentfulQuote {
                quoteText {
                  quoteText
                }
                attribution
              }
            }
          }
        }
      }
    }
  `)

  const quotes = data.allContentfulListOfThings.edges[0].node.entries.reduce(
    (quotes, curQuote) => {
      const quote = curQuote.quoteText ? curQuote.quoteText.quoteText : null
      const tag = curQuote.attribution ? curQuote.attribution : null

      if (quote && tag) quotes.push({ quote, tag })

      return quotes
    },
    []
  )

  return (
    <div className="section--contact__content">
      <div class="content-container">
        <div class="content-wrapper">
          <Quotes quotes={quotes} />
          <FooterContactForm bgColor="" />
        </div>
      </div>
    </div>
  )
}

export default ContactSection
