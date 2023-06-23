import logo from './logo.svg';
import './App.css';
import {Header} from "./headerAndFooter/Header";
import React from "react";
import Footer from "./headerAndFooter/Footer";
import {Route, Routes} from "react-router";
import {ServiceList} from "./furamaservice/ListService";
import {UpdateService} from "./furamaservice/UpdateService";
import {CreateService} from "./furamaservice/CreateService";
import {CustomerList} from "./customer/ListCustomer";
import {CreateCustomer} from "./customer/CreateCustomer";
import {EditCustomer} from "./customer/UpdateCustomer";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/service" element={<ServiceList/>}/>
                <Route path="/update-service/:id" element={<UpdateService/>}/>
                <Route path="/create-service" element={<CreateService/>}/>
                <Route path="/customer" element={<CustomerList/>}/>
                <Route path="/create-customer" element={<CreateCustomer/>}/>
                <Route path="update-customer/:id" element={<EditCustomer/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
