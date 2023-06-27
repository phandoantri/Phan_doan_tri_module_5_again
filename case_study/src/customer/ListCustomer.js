import * as customerService from "../service/CustomerService"
import {useLocation} from "react-router";
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {FaTrash, FaEdit, FaInfoCircle} from 'react-icons/fa';

    export function CustomerList() {
    const [customerList, setCustomerList] = useState([])
const [idDelete,setIdDelete]=useState();
    const [nameDelete,setNameDelete]=useState();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.findAll();
            setCustomerList(result);
        }
        fetchApi();
    }, [])


    const deleteCustomer = async (id) => {
        const result = await customerService.deleteCustomer(id);
        const result1 = await customerService.findAll();
        setCustomerList(result1)
    }

        function deleteByName(id, name) {
            setIdDelete(id)
            setNameDelete(name)
        }

        return (

        <>
            <h1 style={{textAlign: 'center'}}>CUSTOMER LIST</h1>
            <NavLink to='/create-customer' className="btn btn-primary" style={{marginLeft: "6%" ,
                marginBottom:"2%"}}>Create new customer</NavLink>
            <div className="container">
                <table className='table table-primary'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Day Of Birth</th>
                        <th>Gender</th>
                        <th>CMND</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customerList.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.dayOfBirth}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.CMND}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.email}</td>
                            <td>{customer.typeCustomer}</td>
                            <td>{customer.address}</td>
                            <td>
                                <button type="button" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => deleteByName(customer.id, customer.name)}
                                        className="action-icon delete-icon btn-danger">
                                    < FaTrash/>
                                </button>
                                <button>
                                    <NavLink to={"/update-customer/" + customer.id}><FaEdit/></NavLink>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Do you want delete <span style={{color: "red"}}>{nameDelete}</span>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                    </button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"
                                            onClick={() => deleteCustomer(idDelete)}>Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </table>
            </div>
        </>
    );
};