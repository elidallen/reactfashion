// components/Article.js

import React from 'react';

function Article({ title, content, imageSrc, altText }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{content}</p>
      <img src={imageSrc} alt={altText} />
    </article>
  );
}

export default Article;