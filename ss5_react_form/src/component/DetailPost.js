import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import * as postService from "../service/PostService"
import {NavLink} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
export function DetailPost(){
    const param=useParams();
    const [post,setPost]=useState();
    useEffect(()=>{
        detail();
    },[param.id]);

    const detail=async ()=>{
        const result= await postService.findById(param.id);
        setPost(result);
    }
    if (!post) {
        return null;
    }

   return(
       <>
           <NavLink to="/">List Post Return</NavLink>
               {
                   <div className="container">
                           <div>
                               <div><label htmlFor="title">Title</label></div>
                               <div>{post.updatedAt}</div>
                           </div>

                           <div>
                               <div><label htmlFor="slug">Slug</label></div>
                               <div>{post.title}</div>
                           </div>
                           <div>
                               <div><label htmlFor="category">Category</label></div>
                               <div>{post.slug}</div>
                           </div>
                           <div>
                               <div><label htmlFor="content">Content</label></div>
                               <div>{post.category}</div>
                           </div>
                           <div>
                               <div><label htmlFor="updatedAt">UpdatedAt</label></div>
                               <div>{post.content}</div>
                           </div>
                   </div>
               }
           </>
   )

}