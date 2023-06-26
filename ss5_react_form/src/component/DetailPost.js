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
           <Formik
               initialValues={{
                   id: post?.id,
                   title: post?.title,
                   slug: post?.slug,
                   category: post?.category,
                   content: post?.content,
                   updatedAt:post?.updatedAt
               }}
           >
               {
                   <div className="container">
                       <Form>
                           <div>
                               <div><label htmlFor="title">Title</label></div>
                               <div><Field name="title" id="title" readOnly/></div>
                           </div>

                           <div>
                               <div><label htmlFor="slug">Slug</label></div>
                               <div><Field name="slug" id="slug" readOnly/></div>
                           </div>
                           <div>
                               <div><label htmlFor="category">Category</label></div>
                               <div><Field name="category" id="category" readOnly/></div>
                           </div>
                           <div>
                               <div><label htmlFor="content">Content</label></div>
                               <div><Field as="textarea" name="content" id="content" readOnly/></div>
                           </div>
                           <div>
                               <div><label htmlFor="updatedAt">UpdatedAt</label></div>
                               <div><Field type="text" name="updatedAt" id="updatedAt" readOnly/></div>
                           </div>
                       </Form>
                   </div>
               }
           </Formik>
           </>
   )

}