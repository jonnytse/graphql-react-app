import React, { Component } from 'react';
import styles from './Posts.modules.scss';

class Posts extends Component {
    render() {
        return (
            <div className={styles.posts}>
                <h2>H2 header within the 'Posts' Component</h2>
            </div>
        )
    }
}

export default Posts;