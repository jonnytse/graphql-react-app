import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getPostsQuery = gql`
    {
        allPosts{
            title
            id
        }
    }
`

class Posts extends Component {
    displayPosts(){
        let data = this.props.data;
        if(data.loading){
            return(<div>Loading posts...</div>);
        } else {
            return data.allPosts.map(post => {
                return(
                    <li key={post.id}>{post.title}</li>
                );
            })
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Post Titles</h2>
                <ul>
                    <li>{ this.displayPosts() }</li>
                </ul>
            </div>
        )
    }
}

export default graphql(getPostsQuery)(Posts);