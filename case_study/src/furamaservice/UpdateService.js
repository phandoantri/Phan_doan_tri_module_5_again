import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as furamaService from "../service/FuramaService"

export function UpdateService() {
    const param = useParams();
    const [service, setService] = useState();
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchApi=async ()=>{
            const result=await furamaService.getServiceById(param.id);
            setService(result);
        }
        fetchApi();
    },[param.id]);
    if (!service){
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: service?.id,
                    nameService: service?.nameService,
                    serviceArea: service?.serviceArea,
                    serviceCost: service?.serviceCost,
                    maxGuest: service?.maxGuest,
                    rentType: service?.rentType,
                    img:service?.img
                }}
                onSubmit={(values)=>{
                    const update=async ()=>{
                        await furamaService.updateService(param.id,values);
                        navigate("/service");
                    }
                    update();
                }}
            >
                {
                    <div>
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
                                <div className="image-container"></div>
                            </div>
                            <button type="submit">Update</button>
                        </Form>
                    </div>

                }

            </Formik>
        </>
    )
}