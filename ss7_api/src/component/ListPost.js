import React, {useEffect, useState} from "react";
import * as postService from "../service/PostService"
import {NavLink} from "react-router-dom";

export function ListPost() {
    const [posts,setPost]=useState([]);
    useEffect(()=>{
        fetchApi();
    },[]);
    const fetchApi=async ()=>{
        const result=await postService.findAll();
        setPost(result);
    }
    return(
        <>
            <NavLink to="create">Create new post</NavLink>
        <table className="table" border={1}>
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Thumbnail URL</th>
                <th>Slug</th>
                <th>Category</th>
            </tr>
            </thead>
            <tbody>
            {
                posts.map((post)=>(
                    <tr key={post.id}>
                        <td scope="row">{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.thumbnail_url}</td>
                        <td>{post.slug}</td>
                        <td>{post.category}</td>
                    </tr>
                ))
            }

            </tbody>
        </table>
            </>
    )

}