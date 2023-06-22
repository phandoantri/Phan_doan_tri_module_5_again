import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as furamaService from "../service/FuramaService"
import {useNavigate} from "react-router";
import "../css/CreateService.css"

export function CreateService() {
        const navigate=useNavigate();

    return (
        <>
            <Formik
                initialValues={{
                    nameService: [],
                    serviceArea: null,
                    serviceCost: null,
                    maxGuest: null,
                    rentType: [],
                    img: ""
                }}
                onSubmit={(values) => {
                    const create = async () => {
                        await furamaService.createService(values);
                        navigate("/service");

                    }
                    create();
                }}
            >
                {
                    <Form>
                        <div className="container">
                            <div className="form-container">
                                <h1 style={{textAlign: "center"}}>Form Update</h1>
                                <div className='mb-3'>
                                    <label htmlFor='nameService'>Type service </label>
                                    <Field as='select' name='nameService' id='nameService'>
                                        <option value='Villa'>Villa</option>
                                        <option value='Room'>Room</option>
                                        <option value='House'>House</option>
                                    </Field>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='serviceArea'>Diện tích sử dụng </label>
                                    <Field type='number' name="serviceArea" id='serviceArea'/>
                                    <ErrorMessage name='serviceArea' component='span' className='err-message'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='img'>Hình ảnh </label>
                                    <Field  name="img" id='img'/>
                                    <ErrorMessage name='img' component='span' className='err-message'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='serviceCost'>Chi phí thuê </label>
                                    <Field type='text' name="serviceCost" id='serviceCost'/>
                                    <ErrorMessage name='serviceCost' component='span' className='err-message'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='message'>Số người tối đa </label>
                                    <Field type='number' name="maxGuest" id='message'/>
                                    <ErrorMessage name='maxGuest' component='span' className='err-message'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='rentType'>Type service </label>
                                    <Field as='select' name='rentType' id='rentType'>
                                        <option value='Year'>Năm</option>
                                        <option value='Month'>Tháng</option>
                                        <option value='Day'>Ngày</option>
                                        <option value='Giờ'>Giờ</option>
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Create</button>
                    </Form>
                }

            </Formik>
        </>
    )
}