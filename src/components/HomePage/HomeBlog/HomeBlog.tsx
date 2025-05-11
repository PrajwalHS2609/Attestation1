import React from 'react'
import "@/components/Style/style.css";
import HomeBlogHead from './HomeBlogHead';
import HomeBlogMain from './HomeBlogMain';

const HomeBlog = () => {
  return (
    <div className="component-container">
    <HomeBlogHead/>
    <HomeBlogMain/>
    </div>
  )
}

export default HomeBlog
