import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer(){
	return (
		<footer>
			<FontAwesomeIcon icon={faGithub} size='4x' />
			<FontAwesomeIcon icon={faHashtag} size='4x' />
		</footer>
	)
}

export default Footer