import React from 'react';

import Header from '../Header/Header';
import Articles from '../Articles/Articles';





  
const Index = (props) => {
  return (
      <div className='wrapper'>
        <Header 
          child={ props.IndexHeaderChilds }
        />

        <Articles 
          articles={props.articles}
        />
      </div>
  )
}

export default Index;
