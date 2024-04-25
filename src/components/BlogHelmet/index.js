
import React from 'react';
import Helmet from 'react-helmet';
import userConfig from '../../../config';
import imgSrc from '../../main.png';

function BlogHelmet({pageTitle, description, publishDate, slug}) {
  const publishDateIso = publishDate ? publishDate.toISOString() : null;
  const url = slug ? userConfig.siteUrl + slug : userConfig.siteUrl

  return (
    <Helmet
      title={pageTitle}
      htmlAttributes={{ lang: 'en' }}
    >
      <meta name="title" property="og:title" content={pageTitle}/>
      {!slug && <meta property="og:type" content="article" />}
      <meta name="description" property="og:description" content={description}/>
      <meta name="author" property="article:author" content={userConfig.author}/>
      {publishDateIso && <meta name="published_time" property="article:published_time" content={publishDateIso}/>}
      {publishDateIso && <meta name="modified_time" property="article:modified_time" content={publishDateIso}/>}
      <meta property="article:tag" content='software development'/>
      <meta name="image" property="og:image" content={`${userConfig.siteUrl}${imgSrc}`}/>
      <meta name="url" property="og:url" content={url}/>
    </Helmet>
  );
}

export default BlogHelmet;




