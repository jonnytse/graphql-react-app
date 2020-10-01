import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getUsersQuery = gql`
    {
        allUsers{
            firstName
            lastName
            id
            email
        }
    }
`

class Users extends Component {
    displayUsers(){
        let data = this.props.data;
        if(data.loading){
            return(<div>Loading posts...</div>);
        } else {
            return data.allUsers.map(user => {
                return(
                    <ul key={user.email}>
                        <li>Name: {user.firstName} {user.lastName}</li>
                        <li>ID: {user.id}</li>
                        <li>Email: {user.email}</li>
                        <li></li>
                    </ul>
                );
            })
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Users</h2>
                <ul>
                    <li>{ this.displayUsers() }</li>
                </ul>
            </div>
        )
    }
}

export default graphql(getUsersQuery)(Users);