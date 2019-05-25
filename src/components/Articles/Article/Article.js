import React from 'react';



const Article = (props) => {

   return (
      <div className="article">

         <img src={ props.image } alt="" />

         <div className="text_wrapper">
            <p className="p_header">{props.header}</p>
            <p className="p_description" dangerouslySetInnerHTML={{__html: props.text}}></p>
         </div>

      </div>
   )

}

export default Article;
