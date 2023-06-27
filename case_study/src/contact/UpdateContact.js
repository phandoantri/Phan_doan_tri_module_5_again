import * as contactService from "../service/ContactService"
import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";

export function UpdateContact() {
    const param = useParams();
    const navigate = useNavigate();
    const [contacts, setContact] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await contactService.getContactById(param.id);
            setContact(result);
        }
        fetchApi();
    }, []);
    if (!contacts) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: contacts?.id,
                    startDate: contacts?.startDate,
                    endDate: contacts?.endDate,
                    deposit: contacts?.deposit,
                    totalPayment: contacts?.totalPayment
                }}
                onSubmit={(values) => {
                    const update = async () => {
                        await contactService.updateContact(param.id, values);
                        navigate("/contact")
                    }
                    update();
                }}
            >
                {

                    <div className="container">
                        <Form>
                            <h1 style={{textAlign: "center"}}>Update contact</h1>
                            <div>
                                <div><label htmlFor="startDate">Start Date</label></div>
                                <div><Field type="text" name="startDate" id="startDate"/></div>
                            </div>
                            <div>
                                <div><label htmlFor="endDate">End Date</label></div>
                                <div><Field type="text" name="endDate" id="endDate"/></div>
                            </div>
                            <div>
                                <div><label htmlFor="deposit">Deposit</label></div>
                                <div><Field type="number" name="deposit" id="deposit"/></div>
                            </div>
                            <div>
                                <div><label htmlFor="totalPayment">Total payment</label></div>
                                <div><Field type="number" name="totalPayment" id="totalPayment"/></div>
                            </div>
                            <button type="submit">Update</button>

                        </Form>
                    </div>

                }

            </Formik>

        </>

    )
}