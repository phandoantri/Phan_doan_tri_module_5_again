import React, {useEffect, useState} from 'react';
import * as service from '../service/FuramaService'
import {NavLink} from "react-router-dom";

export function ServiceList() {
    const [services, setServices] = useState([])


    useEffect(() => {
        const fetchApi = async () => {
            const result = await service.findAll();
            setServices(result);
        }
        fetchApi();
    }, [])


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
                                        <button type="button" className="btn btn-danger" data-toggle="modal"
                                                data-target="#deleteModal1">Xoá
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="modal fade" id="deleteModal3" tabIndex="-1" role="dialog"
                 aria-labelledby="deleteModalLabel3"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteModalLabel3">Xác nhận Xoá dịch vụ</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Bạn có chắc chắn muốn xoá dịch vụ này?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                            <button type="button" className="btn btn-danger">Xoá</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}