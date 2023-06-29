import axios from "axios";
import React from "react";
import {NavLink} from "react-router-dom";
// import * as postService from "./service"

export default function UserList({users}){
    return (
        <>
          <a href="/create">Create new post</a>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
            </>
    )
}

export const getServerSideProps = async () => {
    const response = await axios.get('http://localhost:8080/users')
    return {
        props: {
            users: response.data
        }
    }
}