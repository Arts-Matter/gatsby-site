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
            slug
          }
        }
      }
    }
  `)

  // Create single news page(s)
  data.allContentfulNewsItem.edges.forEach(edge => {
    const { title, slug, contentful_id } = edge.node
    const id = contentful_id
    let determinedSlug

    if (slug) {
      determinedSlug = convertTitleToSlug(slug)
    } else if (!slug && title) {
      determinedSlug = convertTitleToSlug(title)
    } else if (!slug && !title && contentful_id) {
      determinedSlug = contentful_id
    }

    actions.createPage({
      path: `news/${determinedSlug}`,
      component: require.resolve("./src/templates/singleNews.js"),
      context: { id },
    })
  })
}
