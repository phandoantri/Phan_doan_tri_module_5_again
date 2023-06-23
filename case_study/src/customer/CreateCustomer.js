import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as customerService from "../service/CustomerService"
import {useNavigate} from "react-router";
import * as Yup from "yup"
import "../css/CreateCustomer.css"

export function CreateCustomer() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    dayOfBirth: "",
                    gender: "",
                    CMND: "",
                    phoneNumber: "",
                    email: "",
                    typeCustomer: "",
                    address: ""
                }}
                onSubmit={(values) => {
                    const create=async ()=>{
                        await customerService.create(values)
                        console.log(values)
                        navigate('/customer')
                    }
                    create();
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("must not be left blank"),
                    dayOfBirth: Yup.string().required("must not be left blank"),
                    CMND: Yup.string().required("must not be left blank"),
                    phoneNumber: Yup.string().required("must not be left blank"),
                    email: Yup.string().required("must not be left blank").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
                    address: Yup.string().required("must not be left blank")
                })}
            >
                {
                    <div className="form-container">
                        <h2>Add Customer</h2>
                        <Form>
                            <div>
                                <label> Name:</label>
                                <Field type="text" name="name"/>
                                <ErrorMessage name="name" component='span' className="err-message"/>

                            </div>
                            <div>
                                <label>Day of Birth:</label>
                                <Field type="text" name="dayOfBirth"/>
                                <ErrorMessage name="dayOfBirth" className="err-message"/>
                            </div>
                            <div>
                                <label>Gender :
                                    <label>Male</label>
                                    <Field type="radio" name="gender" value="Male"/>
                                    <label>Female</label>
                                    <Field type="radio" name="gender" value="Female"/>
                                </label>
                            </div>
                            <div>
                                <label>CMND Number:</label>
                                <Field type="text" name="CMND"/>
                                <ErrorMessage name="CMND" className="err-message"/>
                            </div>

                            <div>
                                <label> Phone Number: </label>
                                <Field type="text" name="phoneNumber"/>
                                <ErrorMessage name="phoneNumber" className="err-message"/>
                            </div>

                            <div>
                                <label>Email:</label>
                                <Field type="text" name="email"/>
                                <ErrorMessage name="email" className="err-message"/>
                            </div>

                            <div>
                                <label>
                                    Type Customer:
                                    <Field as="select" name="typeCustomer">
                                        <option value="Diamond">Diamond</option>
                                        <option value="Platinium">Platinium</option>
                                        <option value="Gold">Gold</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Member">Member</option>
                                    </Field>
                                </label>
                            </div>
                            <div>
                                <label> Address: </label>
                                <Field type="text" name="address"/>
                                <ErrorMessage name="address" className="err-message"/>
                            </div>
                            <button type="submit" style={{width: '100px'}}>Add</button>
                        </Form>
                    </div>
                }

            </Formik>
        </>
    );
};