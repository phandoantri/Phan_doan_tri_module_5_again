import React, {useEffect, useState} from "react";
import * as productService from "../service/ProductService"
import * as typeService from "../service/TypeProduct"
import {NavLink} from "react-router-dom";

export function ListProduct() {
    const [products,setProduct]=useState([]);
    const [typeProduct,setTypeProduct]=useState([])
    useEffect(()=>{
        fetchApi()
    },[])
    useEffect(()=>{
        fetchApiType()
    },[])
    const fetchApi=async ()=>{
        const result=await productService.findAll();
        setProduct(result);
    }
    const fetchApiType=async ()=>{
        const result=await typeService.findAll();
        setTypeProduct(result)
    }
return(
    <>
        <NavLink to="create">Create New Product</NavLink>
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Cost</th>
            </tr>
            </thead>
            <tbody>
            {
                products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{typeProduct.find(typeProduct=>typeProduct.id===product.type)?.name}</td>
                        <td>{product.cost}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </>
)
}