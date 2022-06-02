import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
query caca {
    allFile {
      nodes {
        name
      }
    }
  }  
`


export default BlogPage