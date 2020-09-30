import React, { Component } from 'react';
import styles from './Posts.modules.scss';
import { gql} from 'apollo-boost';
import { graphql } from 'react-apollo';

const getPostsQuery = gql`
    {
        posts{
            title
            id
        }
    }
`

class Posts extends Component {
    render() {
        console.log(this.props);
        return (
            <div className={styles.posts}>
                <h2>H2 header within the 'Posts' Component</h2>
                <ul>
                    <li>Post name</li>
                </ul>
            </div>
        )
    }
}

export default graphql(getPostsQuery)(Posts);