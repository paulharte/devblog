import Helmet from 'react-helmet';
import React from 'react';

import userConfig from '../../config';

import Layout from './layout';

import Card from '../components/Card';
import Container from '../components/Container';
import Pagination from '../components/Pagination';
import Summary from '../components/Summary';
import imgSrc from '../main.png';

const IndexPage = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const pageTitle = `${userConfig.title} | ${userConfig.author}`;
  return (
    <Layout>
      <Container>
        <Helmet
          title={pageTitle}
          htmlAttributes={{ lang: 'en' }}
        >
          <meta name="title" property="og:title" content={pageTitle}/>
          <meta name="url" property="og:url" content={userConfig.siteUrl}/>
          <meta
            name="description" property="og:description"
            content={`${userConfig.title} | ${userConfig.description}`}
          />
          <meta name="author" content={userConfig.author}></meta>
          <meta name="image" property="og:image" content={`${userConfig.siteUrl}${imgSrc}`}/>
        </Helmet>
        {group.map(({ node }) => (
          <Card key={node.fields.slug}>
            <Summary
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              image={node.frontmatter.featuredImage}
              slug={node.fields.slug}
            />
          </Card>
        ))}
        <Pagination
          isFirst={index === 1}
          isLast={index === pageCount}
          nextUrl={nextUrl}
          previousUrl={previousUrl}
        />
      </Container>
    </Layout>
  );
};
export default IndexPage;
