exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allContentfulNewsItem(sort: { fields: date, order: DESC }) {
        edges {
          node {
            contentful_id
            date
          }
        }
      }
    }
  `)

  // Create single news page(s)
  data.allContentfulNewsItem.edges.forEach(edge => {
    const slug = edge.node["contentful_id"]

    actions.createPage({
      path: `news/${slug}`,
      component: require.resolve("./src/templates/singleNews.js"),
      context: { id: slug }, // Pass ID to get news item in template
    })
  })
}
