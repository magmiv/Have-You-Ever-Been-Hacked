import React from 'react';
import Input from './Input/Input';
import Link from './Link/Link';
import Error from './Error/Error';


import './css/header.css'

const Header = (props) => {
  

   return (
      <div className="header">
         {
            props.child.map( (elem, key) => {

               if (elem.elem === 'input') {
                  return <Input text={elem.text} hasFontawesome={elem.hasFontawesome} isDomenNameinpit={elem.isDomenNameinpit} logic={elem.logic} key={key}/>
               }
            
               if(elem.elem === 'link') {
                  return <Link text={elem.text} href={elem.href} key={key}/>
               }

               if(elem.elem === 'error') {
                  return <Error text={elem.text} key={key}/>
               }

               return false
               
            })
         }
      </div>
   )
}

export default Header;
