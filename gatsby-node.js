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
          }
        }
      }
    }
  `)

  // Create single news page(s)
  data.allContentfulNewsItem.edges.forEach(edge => {
    // We will want to replace this slug with something more meaningful
    const slug = convertTitleToSlug(edge.node.title)
    const id = edge.node["contentful_id"]

    actions.createPage({
      path: `news/${slug ? slug : id}`,
      component: require.resolve("./src/templates/singleNews.js"),
      context: { id }, // Pass ID to get news item in template
    })
  })
}
