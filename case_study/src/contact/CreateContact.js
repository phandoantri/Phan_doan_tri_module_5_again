import {useNavigate} from "react-router";
import React from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup"
import * as contactService from "../service/ContactService"

export function CreateContact() {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                startDate: "",
                endDate: "",
                deposit: "",
                totalPayment: ""
            }}
            validationSchema={Yup.object({
                startDate: Yup.string().required("Không được để trống"),
                endDate: Yup.string().required("Không được để trống"),
                deposit: Yup.number().required("Không được để trống"),
                totalPayment:Yup.number().required("Không được để trống")
            })}
            onSubmit={(values) => {
                const createContact = async () => {
                    await contactService.createContact(values);
                    navigate("/contact")
                }
                createContact();
            }}
        >
            {
                <Form>
                    <div className="form-group">
                        <label htmlFor="startDate">Start day</label>
                        <Field type="date"
                               className="form-control" name="startDate" id="startDate" placeholder="Start day"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="endDate">End day</label>
                        <Field type="date"
                               className="form-control" name="endDate" id="endDate" placeholder="End day"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="deposit">Deposit</label>
                        <Field type="number"
                               className="form-control" name="deposit" id="deposit" placeholder="Deposit"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="totalPayment">Total payment</label>
                        <Field type="number"
                               className="form-control" name="totalPayment" id="totalPayment"
                               placeholder="Total payment"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>

                </Form>
            }

        </Formik>
    )
}