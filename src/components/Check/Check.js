import React from 'react';

import Header from '../Header/Header';
import Articles from '../Articles/Articles';





  
const Check = (props) => {
  return (
      <div className='wrapper'>
        <Header 
          child={ props.CheckHeaderChilds }
        />

        <Articles
          articles={props.articles}
        />
      </div>
  )
}

export default Check;
