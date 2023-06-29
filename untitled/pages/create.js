import React from "react";
import {Form, Formik} from "formik";
import * as Yup from "yup"
import axios from "axios";
import {useRouter} from "next/router"


export default function Create() {
    const router=useRouter();
    return (
        <Formik
            initialValues={{
                name: "",
                username: "",
                email: ""
            }}
            validationSchema={Yup.object({
                name: Yup.string().required("Khong duoc de trong"),
                username: Yup.string().required("Khong duoc de trong"),
                email: Yup.string().required("Khong duoc de trong")
            })}
            onSubmit={(values) => {
                const create = async () => {
                    await axios.post('http://localhost:8080/users',values)
                    router.push("/home")
                }
                create();
            }}

        >
            {
                <Form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               className="form-control" name="name" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text"
                               className="form-control" name="username" id="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               className="form-control" name="email" id="email"/>
                    </div>
                    <button type="submit">Create</button>
                </Form>
            }
        </Formik>
    )

}
// export const getServerSideProps = async (post) => {
//     const response = await axios.post('http://localhost:8080/users',post)
//     return {
//         props: {
//             users: response.data
//         }
//     }
// }