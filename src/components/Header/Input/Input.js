import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faSpinner)


const Input = (props) => {

	let urlInput = React.createRef()

	return (
		<div className="form">
			<input type="text" placeholder={props.text} ref={urlInput}
					onInput={ () => {

						if (props.isDomenNameinpit) {
							props.logic( urlInput.current.value )
						}
					}}
			/>

			{ props.hasFontawesome &&
				<div className="send">
					<FontAwesomeIcon 
						icon='search' 
						className="search" 
						onClick={ () => {
							props.logic( urlInput.current.value )
						}} 
					/>
					<FontAwesomeIcon icon='spinner' className="load"/>
				</div>
			}
      </div>
  )

}

export default Input;
