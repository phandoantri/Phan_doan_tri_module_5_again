import React from "react";
import {posts} from "../data/Data";

export function ListBlog() {

    return (
        <>
            <table border={1}>
                <thead>
                <tr>
                    <td>Title</td>
                    <td>Slug</td>
                    <td>Category</td>
                    <td>UpdatedAt</td>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((values, index) => (
                        <tr key={index}>
                            <td>{values.title}</td>
                            <td>{values.slug}</td>
                            <td>{values.category}</td>
                            <td>{values.updatedAt}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}