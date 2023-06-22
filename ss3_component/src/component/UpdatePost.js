import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as postService from "../service/PostService"
import * as Yup from "yup"

export function UpdatePost() {
    const navigate = useNavigate();
    const param = useParams();
    const [posts, setPost] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await postService.getPostById(param.id)
            setPost(result)
        }
        fetchApi();
    }, [param.id]);
    if (!posts) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: posts?.id,
                    title: posts?.title,
                    slug: posts?.slug,
                    category: posts?.category,
                    content: posts?.content,
                    updatedAt: new Date()
                }}
                validationSchema={Yup.object({
                    title: Yup.string().required("Khong duoc de trong"),
                    slug: Yup.string().required("Khong duoc de trong"),
                    category: Yup.string().required("Khong duoc de trong"),
                    content: Yup.string().required("Khong duoc de trong"),
                    updatedAt: Yup.date().required("Khong duoc de trong")
                })}
                onSubmit={(values) => {
                    const update = async () => {
                        await postService.updatePost(param.id, values);
                        navigate("/")
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