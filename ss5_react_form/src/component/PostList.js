import React, {useEffect, useState} from "react";
import * as postService from "../service/PostService"
import {NavLink} from "react-router-dom";
import "../css/Css.css"
import {FaTrash, FaEdit, FaInfoCircle} from 'react-icons/fa';


export function PostList() {
    const [posts, setPost] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {
        const result = await postService.findAll();
        setPost(result);
    }

    function deleteByName(id, title) {
        setIdDelete(id);
        setNameDelete(title);
    }

    const deletePost = async (idDelete) => {
        await postService.deleteById(idDelete);
        const result = await postService.findAll();
        setPost(result);
    }

    return (
        <>
            <NavLink to="/create-post">Create New Post</NavLink>
            <h1 style={{textAlign: "center"}}>List Post</h1>
            <table border={1} className="my-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.category}</td>
                            <td>{post.updatedAt}</td>
                            <td>
                                <button type="button" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => deleteByName(post.id, post.title)}
                                        className="action-icon delete-icon">
                                    < FaTrash/>
                                </button>
                                <button>
                                    <NavLink to={"/detail/" + post.id}> <FaInfoCircle/></NavLink>

                                </button>
                                <button>
                                    <NavLink to={"/update/" + post.id}><FaEdit/></NavLink>
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
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"
                                        onClick={() => deletePost(idDelete)}>Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </table>
        </>
    )

}

