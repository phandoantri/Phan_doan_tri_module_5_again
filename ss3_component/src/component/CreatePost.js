import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import React from "react";
import * as postService from "../service/PostService"
import {useNavigate} from "react-router";

export function CreatePost() {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                title: "",
                slug: "",
                category: "",
                content: "",
                updatedAt: ""
            }}
            validationSchema={Yup.object({
                title: Yup.string().required("Khong duoc de trong"),
                slug: Yup.string().required("Khong duoc de trong"),
                category: Yup.string().required("Khong duoc de trong"),
                content: Yup.string().required("Khong duoc de trong"),
                updatedAt: Yup.string().required("Khong duoc de trong")
            })}
            onSubmit={(values) => {
                const create = async () => {
                    await postService.createPost(values);
                    navigate("/")
                }
                create();
            }}
        >
            {
                <div className="container">
                    <Form>
                        <div>
                            <div><label htmlFor="title">Title</label></div>
                            <div><Field type="text" name="title" id="title"/></div>
                            <ErrorMessage name="title" component="span" className="err-mess"/>
                        </div>
                        <div>
                            <div><label htmlFor="slug">Slug</label></div>
                            <div><Field type="text" name="slug" id="slug"/></div>
                            <ErrorMessage name="slug" component="span" className="err-mess"/>
                        </div>
                        <div>
                            <div><label htmlFor="category">Category</label></div>
                            <div><Field type="text" name="category" id="category"/></div>
                            <ErrorMessage name="category" component="span" className="err-mess"/>
                        </div>
                        <div>
                            <div><label htmlFor="content">Content</label></div>
                            <div><Field type="text" as="textarea" name="content" id="content"/></div>
                            <ErrorMessage name="content" component="span" className="err-mess"/>
                        </div>
                        <div>
                            <div><label htmlFor="updatedAt">UpdatedAt</label></div>
                            <div><Field type="text" name="updatedAt" id="updatedAt"/></div>
                            <ErrorMessage name="updatedAt" component="span" className="err-mess"/>
                        </div>
                        <button type="submit">Add</button>
                    </Form>
                </div>

            }
        </Formik>
    )

}