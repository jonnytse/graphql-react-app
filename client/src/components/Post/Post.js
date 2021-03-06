import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getPostQuery = gql`
    {
        Post(id:"ckfoeh8wp0h0vhl10scmmdztp"){
            title
            id
            author{
                firstName
                lastName
                id
                email
                posts{
                    title
                    id
                }
            }
        }
    }
`

class Post extends Component {
    displayPost(){
        let data = this.props.data;
        if(data.loading){
            return(<div>Loading post...</div>);
        } else {
            return(
                <ul>
                    <li>Title: {data.Post.title}</li>
                    <li>ID: {data.Post.id}</li>
                    <li>Author: {data.Post.author.firstName} {data.Post.author.lastName}</li>
                    <li>Email: {data.Post.author.email}</li>
                    <li></li>
                    <li>OTHER POSTS by {data.Post.author.firstName} {data.Post.author.lastName}:</li> 
                        {data.Post.author.posts.map(post => {
                        return (
                            <li key={post.id}>{post.title}</li>
                        );
                    })}
                </ul>
            )
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Individual Post, associated author and associated posts</h2>
                <ul>
                    <li>{ this.displayPost() }</li>
                </ul>
            </div>
        )
    }
}

export default graphql(getPostQuery)(Post);