import React, {useEffect, useState} from "react";
import * as postService from "../service/PostService"
import {NavLink, useLocation} from "react-router-dom";


export function ListPosts() {
    const [posts, setPost] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    const location = useLocation();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await postService.findAll();
            setPost(result);
        }
        fetchApi();
    }, []);

    function deleteByName(id, title) {
        setIdDelete(id);
        setNameDelete(title);
    }

    const handleDelete = async (id) => {
        await postService.deleteById(id);
        const result = await postService.findAll();
        setPost(result);
    }
    // useEffect(() => {
    //     const updatePost = location.state?.updatePost;
    //     if (updatePost) {
    //         posts.map((post => {
    //             if (post.id === updatePost.id) {
    //                 return updatePost;
    //             }
    //             return post;
    //
    //         }))
    //         setPost(updatePost);
    //     }
    // }, [location.state?.updatePost]);

    return (
        <>
            <NavLink to="create-post">Create New Post</NavLink>
            <div className="container-fluid">
                <h1 style={{textAlign: "center"}}>List Post</h1>
                <table border={1}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>UpdatedAt</th>
                        <th>Action</th>
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
                                <td>{post.content}</td>
                                <td>{post.updatedAt}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            onClick={() => deleteByName(post.id, post.title)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-outline-primary">
                                        <NavLink to={"update-post/" + post.id}>Update</NavLink>
                                    </button>

                                </td>
                            </tr>
                        ))

                    }
                    </tbody>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Do you want delete <span style={{color: "red"}}>{nameDelete}</span>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                    </button>
                                    <button type="submit" className="btn btn-primary"
                                            onClick={() => handleDelete(idDelete)} data-bs-dismiss="modal">Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </table>
            </div>

        </>
    )
}