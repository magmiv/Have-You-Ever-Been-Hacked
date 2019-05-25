import React from 'react';
import './css/index.css'

import Check from './components/Check/Check';
import Index from './components/Index/Index';

import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

  return (
    <BrowserRouter>
    
        <Route exact path="/" render={() => <Index 
            IndexHeaderChilds={props.state.index.IndexHeaderChilds} 
            articles={props.state.index.articles}
        />} />

        <Route path="/check" render={() => <Check 
          CheckHeaderChilds={props.state.check.CheckHeaderChilds} 
          articles={props.state.check.articles}
        />} />
    </BrowserRouter>
  )
}

export default App;
