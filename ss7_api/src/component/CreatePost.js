import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup  from "yup"
import * as postService from "../service/PostService"
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function CreatePost() {
    const navigate=useNavigate();
return(
    <>
    <Formik
    initialValues={{
        title:"",
        thumbnail_url:"",
        slug:"",
        category:""
    }}
    validationSchema={Yup.object({
        title:Yup.string().required("khong duoc de trong"),
        thumbnail_url:Yup.string().required("khong duoc de trong"),
        slug:Yup.string().required("khong duoc de trong"),
        category:Yup.string().required("khong duoc de trong")
    })}
    onSubmit={(values)=>{
        const create=async ()=>{
            await postService.createPost(values);
            navigate("/")
            toast("create thanh cong")

        }
        create();
    }}
    >
        {
            <div className="container">
                <Form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <Field type="text"
                               className="form-control" name="title" id="title"/>
                               <ErrorMessage name="title" component="span" className="err-mess"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="thumbnail_url">Thumbnail URL</label>
                        <Field type="text"
                               className="form-control" name="thumbnail_url" id="thumbnail_url" />
                        <ErrorMessage name="thumbnail_url" component="span" className="err-mess"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Slug</label>
                        <Field type="text"
                               className="form-control" name="slug" id="slug" />
                        <ErrorMessage name="slug" component="span" className="err-mess"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <Field type="text"
                               className="form-control" name="category" id="category" />
                        <ErrorMessage name="category" component="span" className="err-mess"/>
                    </div>
                    <button type="submit">Add</button>

                </Form>
            </div>
        }

    </Formik>
        </>
)
}