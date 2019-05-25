import React from 'react';
import Article from './Article/Article';

import './css/articles.css'

const Articles = (props) => {

	return (
		<div className="articles">
			{
				props.articles.map( (elem, key) => {
					return <Article header={elem.header} text={elem.text} image={elem.image} key={key}/>
				})
			}
		</div>
	)
}

export default Articles;
