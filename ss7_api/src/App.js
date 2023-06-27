import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import React from "react";
import {ListPost} from "./component/ListPost";
import {CreatePost} from "./component/CreatePost";
import {ToastContainer} from "react-toastify";

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<ListPost/>}/>
      <Route path="create" element={<CreatePost/>}/>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
