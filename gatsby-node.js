exports.createPages = async ({ actions, graphql }) => {
  const convertTitleToSlug = title => {
    if (title) {
      // Remove anything that is not alpha numeric, "/", or " "
      const slugNoSpecialChars = title.replace(/[^0-9a-zA-Z/\s]/g, "")
      // Replace "/", or " ", with "-"
      // If consecutive "-"s replace with "-"
      return slugNoSpecialChars
        .replace(/[/\s]/g, "-")
        .replace(/--+/g, "-")
        .toLowerCase()
    }
    return null
  }

  const { data } = await graphql(`
    query {
      allContentfulNewsItem(sort: { fields: date, order: DESC }) {
        edges {
          node {
            contentful_id
            title
            date
          }
        }
      }
      allContentfulResourceBucket {
        edges {
          node {
            title
            contentful_id
            slug
          }
        }
      }
    }
  `)

  // Create single news pages
  data.allContentfulNewsItem.edges.forEach(edge => {
    const slug = convertTitleToSlug(edge.node.title)
    const id = edge.node["contentful_id"]
    const date = edge.node.date

    actions.createPage({
      path: `news${date ? '/' + date : ''}/${slug ? slug : id}`,
      component: require.resolve("./src/templates/singleNews.js"),
      context: { id }, // Pass ID to get news item in template
    })
  })

  // Create single resource pages
  data.allContentfulResourceBucket.edges.forEach(edge => {
    const { slug, contentful_id, title } = edge.node
    const id = contentful_id

    let determinedSlug
    // Use provided slug first, title second, ID as fallback
    if (slug) {
      determinedSlug = convertTitleToSlug(slug)
    } else if (!slug && title) {
      determinedSlug = convertTitleToSlug(title)
    } else if (!slug && !title && contentful_id) {
      determinedSlug = contentful_id
    }

    actions.createPage({
      path: `resources/${determinedSlug}`,
      component: require.resolve("./src/templates/singleResource.js"),
      context: { id }, // Pass contentful_id to grab resource data in template
    })
  })

}
