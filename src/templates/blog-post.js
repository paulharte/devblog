import {graphql} from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import React from 'react';

import userConfig from '../../config';

import Layout from './layout';

import Article from '../components/Article';
import ArticleHeader from '../components/ArticleHeader';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import FeaturedImage from '../components/FeaturedImage';
import PageNav from '../components/PageNav';
import Share from '../components/Share';
import imgSrc from '../main.png';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const author = get(this.props, 'data.site.siteMetadata.author');
    const { previous, next } = this.props.pageContext;

    let url = '';
    if (typeof window !== `undefined`) {
      url = window.location.href;
    }
    const publishDate = new Date(post.frontmatter.date);
    const publishDateUtc = publishDate.toUTCString();
    const pageTitle = `${post.frontmatter.title} | ${author}`;
    return (
      <Layout>
        <Container>
          <Helmet
            title={pageTitle}
            htmlAttributes={{ lang: 'en' }}
          >
            <meta name="title" property="og:title" content={pageTitle}/>
            <meta property="og:type" content="article" />
            <meta
              name="description" property="og:description"
              content={post.excerpt}
            />
            <meta name="author" property="article:author" content={userConfig.author}/>
            <meta name="published_time" property="article:published_time " content={publishDateUtc}/>
            <meta name="modified_time" property="article:modified_time" content={publishDateUtc}/>
            <meta property="article:tag" content='software development'/>
            <meta name="image" property="og:image" content={`${userConfig.siteUrl}${imgSrc}`}/>
          </Helmet>
          <Card>
            <ArticleHeader>
              {post.frontmatter.featuredImage && (
                <FeaturedImage
                  sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
                />
              )}
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
              <span />
            </ArticleHeader>
            <Article>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Article>
            {userConfig.showShareButtons && (
              <Share url={url} title={post.frontmatter.title} />
            )}
          </Card>

          <PageNav>
            {previous && (
              <Button to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Button>
            )}

            {next && (
              <Button to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Button>
            )}
          </PageNav>
        </Container>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 850) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
