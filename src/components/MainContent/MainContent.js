// components/MainContent.js

import React from 'react';
import Article from '../Article/Article.js';
import './MainContent.css';

function MainContent() {
  return (
    <main>
      <Article
        title="Blog Post 1 Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg" 
        altText="Description of Image 1"
      />
      <Article
        title="Blog Post 2 Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg" 
        altText="Description of Image 2"
      />
    </main>
  );
}

export default MainContent;
