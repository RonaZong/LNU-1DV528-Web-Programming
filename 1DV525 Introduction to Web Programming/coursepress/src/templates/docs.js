import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { Layout } from '$components'
import NextPrevious from '../components/NextPrevious'
import '../components/styles.css'
import config from '../../config'

export default props => {
  const {
    allMdx,
    mdx,
    site: {
      siteMetadata: { title }
    }
  } = props.data

  const getTitleFromSlug = slug =>
    allMdx.edges.find(({ node }) => node.fields.slug === slug).node.fields.title

  const nav = allMdx.edges
    .map(({ node }) => node.fields.slug)
    .filter(slug => slug !== '/')
    .map(slug => ({ title: getTitleFromSlug(slug), url: slug }))

  // meta tags
  const metaTitle = mdx.frontmatter.metaTitle
  const metaDescription = mdx.frontmatter.metaDescription
  let canonicalUrl = config.gatsby.siteUrl
  canonicalUrl =
    config.gatsby.pathPrefix !== '/'
      ? canonicalUrl + config.gatsby.pathPrefix
      : canonicalUrl
  canonicalUrl = canonicalUrl + mdx.fields.slug

  return (
    <Layout {...props}>
      <Helmet>
        {metaTitle ? <title>{metaTitle}</title> : null}
        {metaTitle ? <meta name='title' content={metaTitle} /> : null}
        {metaDescription ? (
          <meta name='description' content={metaDescription} />
        ) : null}
        {metaTitle ? <meta property='og:title' content={metaTitle} /> : null}
        {metaDescription ? (
          <meta property='og:description' content={metaDescription} />
        ) : null}
        {metaTitle ? (
          <meta property='twitter:title' content={metaTitle} />
        ) : null}
        {metaDescription ? (
          <meta property='twitter:description' content={metaDescription} />
        ) : null}
        <link rel='canonical' href={canonicalUrl} />
      </Helmet>
      <div className={'titleWrapper'}>
        <h1 className={'title'}>{mdx.fields.title}</h1>
      </div>
      <div className={'mainWrapper'}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
      <div className={'addPaddTopBottom'}>
        <NextPrevious mdx={mdx} nav={nav} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`
