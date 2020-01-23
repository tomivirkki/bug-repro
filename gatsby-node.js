exports.createPages = async ({ graphql }) => {
  const result = await graphql(`
    {
      allFile {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allFile.edges.forEach(({ node }) => {
    console.log('Does it work?', node.fields.slug);
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  createNodeField({
    name: `slug`,
    node,
    value: 'yes',
  })
}
