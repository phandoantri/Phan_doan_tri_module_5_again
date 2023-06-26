import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import * as postService from "../service/PostService"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"

export function UpdatePost() {
    const param = useParams();
    const [post, setPost] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        getPostById();
    }, [param.id]);

    const getPostById = async () => {
        const result = await postService.findById(param.id);
        setPost(result);
    }
    if (!post){
        return null;
    }

    return (
        <>
        <Formik
        initialValues={{
            title:post?.title,
            slug:post?.slug,
            category:post?.category,
            content:post?.content,
            updatedAt:new Date()
        }}
        validationSchema={Yup.object({
            title:Yup.string().required("khong duoc de trong"),
            slug:Yup.string().required("khong duoc de trong"),
            category:Yup.string().required("khong duoc de trong"),
            content:Yup.string().required("khong duoc de trong"),
            updatedAt:Yup.string().required("khong duoc de trong")
        })}
        onSubmit={(value)=>{
            const update=async ()=>{
                await postService.updatePost(param.id,value);
                navigate("/");
            }
            update();
        }}
        >
            {

                <div className="container">
                    <Form>
                        <div>
                            <div><label htmlFor="title">Title</label></div>
                            <div><Field name="title" id="title"/></div>
                            <ErrorMessage name="title" component="span" className="err-mess"/>
                        </div>
                        <div>
                            <div><label htmlFor="slug">Slug</label></div>
                            <div><Field name="slug" id="slug"/></div>
                            <ErrorMessage name="slug" component="span" className="err-mess"/>
                        </div>
                        <div>
                            <div><label htmlFor="category">Category</label></div>
                            <div><Field name="category" id="category"/></div>
                            <ErrorMessage name="category" component="span" className="err-mess"/>
                        </div>
                        <div>
                            <div><label htmlFor="content">Content</label></div>
                            <div><Field as="textarea" name="content" id="content"/></div>
                            <ErrorMessage name="content" component="span" className="err-mess"/>
                        </div>
                        <div>
                            <div><label htmlFor="updatedAt">UpdatedAt</label></div>
                            <div><Field type="text" name="updatedAt" id="updatedAt"/></div>
                            <ErrorMessage name="updatedAt" component="span" className="err-mess"/>
                        </div>
                        <button type="submit">Update</button>
                    </Form>
                </div>
            }
        </Formik>
        </>
    )
}