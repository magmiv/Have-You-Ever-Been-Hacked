import React from 'react';
import { NavLink } from 'react-router-dom'

const Link = (props) => {
	return (
		<NavLink className="link" to={props.href} >{props.text}</NavLink>
	)
}

export default Link;
