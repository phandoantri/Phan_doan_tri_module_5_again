import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {ListProduct} from "./component/ListProduct";
import {CreateProduct} from "./component/CreateProduct";
import {UpdateProduct} from "./component/UpdateProduct";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ListProduct/>}/>
                <Route path="/create" element={<CreateProduct/>}/>
                <Route path="/update/:id" element={<UpdateProduct/>}/>
            </Routes>
        </>
    );
}

export default App;
