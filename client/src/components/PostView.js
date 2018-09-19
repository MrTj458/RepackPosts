import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Header, Container} from 'semantic-ui-react'

const PostView = ({post = {}}) => (
	<Container>
		<Link to="/posts">View All Posts</Link>
		<Header as="h3" textAlign="center">{post.title}</Header>
		<Header as="h6" textAlign="center">{post.author}</Header>
		<p>{post.body}</p>
	</Container>
)

const mapStateToProps = (state, props) => {
	return {post: state.posts.find(p => p.id === parseInt(props.match.params.id))}
}

export default connect(mapStateToProps)(PostView)