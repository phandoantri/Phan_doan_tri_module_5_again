import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import * as postService from "../service/PostService"
import {Formik} from "formik";

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
    return (
        <>
        <Formik>


        </Formik>
        </>
    )
}