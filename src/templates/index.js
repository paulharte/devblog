import React from 'react';

import userConfig from '../../config';

import Layout from './layout';

import Card from '../components/Card';
import Container from '../components/Container';
import Pagination from '../components/Pagination';
import Summary from '../components/Summary';
import BlogHelmet from '../components/BlogHelmet';

const IndexPage = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const pageTitle = `${userConfig.title} | ${userConfig.author}`;
  const description = `${userConfig.title} | ${userConfig.description}`
  return (
    <Layout>
      <Container>
        <BlogHelmet pageTitle={pageTitle} description={description}/>
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
