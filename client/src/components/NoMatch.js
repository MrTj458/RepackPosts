import React from 'react'
import {Link} from 'react-router-dom'
import {Header} from 'semantic-ui-react'

const NoMatch = () => (
	<Header as="h1" textAlign="center">
		Oh No!
		<br />
		That page does not exist!
		<br />
		<Link to="/">Return to safety</Link>
	</Header>
)

export default NoMatch