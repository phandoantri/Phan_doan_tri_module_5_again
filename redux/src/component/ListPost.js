import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findAll} from "../redux/action/post";
import {NavLink} from "react-router-dom";


export function ListPost() {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAll())
    }, [])
    return (
        <>
            <NavLink to="create">Create new post</NavLink>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Category</th>
                    <th>Thumbnail URL</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.slug}</td>
                            <td>{post.category}</td>
                            <td>{post.thumbnail_url}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

        </>
    )
}