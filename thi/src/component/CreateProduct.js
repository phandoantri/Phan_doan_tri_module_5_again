import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import * as typeService from "../service/TypeProduct"
import * as productService from "../service/ProductService"

export function CreateProduct() {
    const navigate = useNavigate();
    const [type, setType] = useState([]);
    const fetchType = async () => {
        const result = await typeService.findAll();
        setType(result);
    }
    useEffect(() => {
        fetchType()
    }, [])
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    type: "",
                    cost: ""
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("khong duoc de trong"),
                    cost: Yup.string().required("khong duoc de trong")
                })}
                onSubmit={(values) => {
                    const create = async () => {
                        await productService.createProduct(values);
                        navigate("/")
                    }
                    create();
                }}
            >
                {
                    <div className="container">
                        <Form>
                            <div>
                                <div><label htmlFor="name"></label>Name</div>
                                <div><Field id="name" type="text" name="name"/></div>
                                <ErrorMessage name="name" component="span" className="err-mess"/>
                            </div>
                            <div>
                                <div><label htmlFor="type">Type Product </label></div>
                                <div>
                                    <Field as="select" name="type">
                                        <option value="">Chon</option>
                                        {
                                            type.map((type) => (
                                                <option value={type.id}>{type.name}</option>
                                            ))
                                        }
                                    </Field>
                                </div>
                            </div>
                            <div>
                                <div><label htmlFor="cost"></label>cost</div>
                                <div><Field id="cost" type="number" name="cost"/></div>
                                <ErrorMessage name="cost" component="span" className="err-mess"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>

                        </Form>
                    </div>
                }

            </Formik>
        </>
    )
}