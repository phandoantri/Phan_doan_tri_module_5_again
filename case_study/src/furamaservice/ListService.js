import React, {useEffect, useState} from 'react';
import * as service from '../service/FuramaService'
import {NavLink} from "react-router-dom";
import * as furamaService from "../service/FuramaService"

export function ServiceList() {
    const [services, setServices] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();

    useEffect(() => {
        fetchApi();
    }, [])

    const fetchApi = async () => {
        const result = await service.findAll();
        setServices(result);
    }


    function handleDelete(id, nameService) {
        setIdDelete(id);
        setNameDelete(nameService);
    }

       const deleteById= async (idDelete)=>{
           await furamaService.deleteService(idDelete);
           const result=await furamaService.findAll();
           setServices(result);
       }


    return (
        <>
            <div className="row mx-0" style={{marginTop: '40px'}}>
                <img className="img-fluid px-0" style={{position: 'relative', height: '400px'}}
                     src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433" alt=""/>
                <h2 style={{
                    position: 'absolute',
                    margin: 'inherit',
                    fontSize: '40px',
                    color: '#ffffff',
                    textAlign: 'center',
                    fontWeight: '700',
                    fontStyle: 'normal'
                }}
                    className="vc_custom_heading">LOẠI PHÒNG</h2>
            </div>
            <h1 className="text-center mt-5">Furama Services</h1>
            <NavLink to="/create-service">Create New Service</NavLink>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map((values) => (

                            <div className="col">
                                <div className="card">
                                    <img
                                        src={values.img}
                                        className="card-img-top" alt="Service 1" width={370} height={240}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Service Type:{values.nameService}</h5>
                                        <p className="card-text">Service Area :{values.serviceArea}m2</p>
                                        <p className="card-text">Max People :{values.maxGuest}</p>
                                        <NavLink to={"/update-service/" + values.id}
                                                 className="btn btn-primary">Sửa</NavLink>
                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"  onClick={() => handleDelete(values.id, values.nameService)}>
                                            Xóa
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
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
                            Ban co muon xoa <span style={{color:"red"}}>{nameDelete}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="submit" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>deleteById(idDelete)}>Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


