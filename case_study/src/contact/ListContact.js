import React, {useEffect, useState} from "react";
import * as contactService from "../service/ContactService"
import {NavLink} from "react-router-dom";
import "../css/Contact.css"
import {FaTrash, FaEdit, FaInfoCircle} from 'react-icons/fa';

export function ListContact() {
    const [contacts,setContact]=useState([]);
    useEffect(()=>{
        const fetchApi=async ()=>{
            const result=await contactService.findAll();
            setContact(result);
        }
        fetchApi();
    },[]);
    return(
        <>
            <h1 style={{textAlign:"center"}}>Contact List</h1>
            <NavLink to="/create-contact">Create new contact</NavLink>
            <div className="container">
                <table>
                    <thead>
                    <tr>
                        <th>Contact code</th>
                        <th>Start day</th>
                        <th>End day</th>
                        <th>Deposit</th>
                        <th>Total payment</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        contacts.map((contact)=>(
                            <tr key={contact.id}>
                                <td>{contact.id}</td>
                                <td>{contact.startDate}</td>
                                <td>{contact.endDate}</td>
                                <td>{contact.deposit}</td>
                                <td>{contact.totalPayment}</td>
                                <td>
                                    <button>
                                        <NavLink to={"/update-contact/"+contact.id}><FaEdit/></NavLink>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

            </>
    );
}