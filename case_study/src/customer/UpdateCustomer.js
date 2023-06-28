import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {Field, Form, Formik} from "formik";
import * as customerService from "../service/CustomerService"
import "../css/UpdateCustomer.css"

export function EditCustomer() {
    const [updateCustomer, setUpdateCustomer] = useState()
    const param = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const getCustomerById = async () => {
            const result = await customerService.getCustomerById(param.id);
            setUpdateCustomer(result);
        }
        getCustomerById();
    }, [param.id]);

    if (!updateCustomer) {
        return null;
    }

    return (
        <>
            <Formik
                initialValues={{
                    id: updateCustomer?.id,
                    name: updateCustomer?.name,
                    dayOfBirth: updateCustomer?.dayOfBirth,
                    gender: updateCustomer?.gender,
                    CMND: updateCustomer?.CMND,
                    phoneNumber: updateCustomer?.phoneNumber,
                    email: updateCustomer?.email,
                    typeCustomer: updateCustomer?.typeCustomer,
                    address: updateCustomer?.address
                }}
                onSubmit={(values) => {
                    const update = async () => {
                        await customerService.updateCustomer(param.id, values)
                        navigate("/customer")
                    }
                    update();
                }}

            >
                {

                    <div className="contract-form-container">
                        <h2 style={{textAlign: 'center'}}>Sửa thông tin khách hàng</h2>
                        <div className="container">
                            <Form>
                                <div style={{width:"366px"}}>
                                    <label htmlFor="name">Họ tên:</label>
                                    <Field
                                        type="text"
                                        id="name"
                                        name="name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dayOfBirth">Ngày sinh:</label>
                                    <Field
                                        type="text"
                                        id="dayOfBirth"
                                        name="dayOfBirth"
                                    />
                                </div>
                                <div>
                                    <label>Gender :
                                        <div>
                                            <label htmlFor="gender">Male</label>
                                            <Field type="radio" id="gender" name="gender" value="Male"/>
                                        </div>
                                        <div>
                                            <label htmlFor="gender">Female</label>
                                            <Field type="radio" id="gender" name="gender" value="Female"/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="CMND">CMND:</label>
                                    <Field
                                        type="text"
                                        id="CMND"
                                        name="CMND"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber">Phone number:</label>
                                    <Field
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">email:</label>
                                    <Field
                                        type="text"
                                        id="email"
                                        name="email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="typeCustomer">Loại khách:</label>
                                    <Field as="select" id="typeCustomer"
                                           name="typeCustomer">
                                        <option value="Diamond">Diamond</option>
                                        <option value="Platinium">Platinium</option>
                                        <option value="Gold">Gold</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Member">Member</option>
                                    </Field>
                                </div>
                                <div>
                                    <label htmlFor="address">Địa chỉ:</label>
                                    <Field
                                        type="text"
                                        id="address"
                                        name="address"
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                }
            </Formik>

        </>
    );
};

