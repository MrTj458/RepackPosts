import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Container, Header, Card} from 'semantic-ui-react'

class Posts extends React.Component {
	posts = () => {
		return (
			this.props.posts.map(post => {
				<Fragment>
					<Card key={post.id}>
						<Card.Content>
							<Card.Header>
								{post.title}
							</Card.Header>
							<Card.Meta>
								<span>
									{post.author}
								</span>
							</Card.Meta>
							<Card.Description>
								{post.body}
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<Link to={`/posts/${post.id}`}>
								View Post
							</Link>
						</Card.Content>
					</Card>
				</Fragment>
			})
		)
	}

	render() {
		return (
			<Container>
				<Header as="h3" textAlign="center">Posts</Header>
				<Card.Group itemsPerRow={4}>
					{this.posts()}
				</Card.Group>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {posts: state.posts}
}

export default connect(mapStateToProps)(Posts)