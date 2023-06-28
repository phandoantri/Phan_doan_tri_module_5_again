import React from "react";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";
import * as Yup from "yup"
import {useDispatch} from "react-redux";
import {createPost} from "../redux/action/post";

export function CreatePost() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
                title: "",
                thumbnail_url: "",
                slug: "",
                category: ""
            }}
            validationSchema={Yup.object({
                title: Yup.string().required("khong duoc de trong"),
                thumbnail_url: Yup.string().required("khong duoc de trong"),
                slug: Yup.string().required("khong duoc de trong"),
                category: Yup.string().required("khong duoc de trong")
            })}
            onSubmit={(values) => {
                const create = async () => {
                    dispatch(createPost(values))
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
                            <Field id="title" name="title" type="text"/>
                        </div>
                        <div>
                            <div><label htmlFor="slug">Slug</label></div>
                            <Field id="slug" name="slug" type="slug"/>
                        </div>
                        <div>
                            <div><label htmlFor="category">Category</label></div>
                            <Field id="category" name="category" type="text"/>
                        </div>
                        <div>
                            <div><label htmlFor="thumbnail_url">Thumbnail URL</label></div>
                            <Field id="thumbnail_url" name="thumbnail_url" type="text"/>
                        </div>
                        <button type="submit">Add</button>
                    </Form>
                </div>
            }
        </Formik>
    )
}