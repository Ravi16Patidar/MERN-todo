import React, { Fragment, useState } from "react";
// import './Login.css'
import { HiAtSymbol } from "react-icons/hi2";
import { FaLock } from "react-icons/fa";
import {Link, useNavigate  } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import axios from "axios";

function Signup() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent form submission
    try{
      let res=await axios.post("http://localhost:5000/signup",formData)
      console.log(res.data.status)
      if(res?.data?.status===201){
        alert(res?.data?.message)
        setFormData({
          fullName:'',
          email:'',
          password:''
        })
        navigate('/homePage')
      } 
    }catch(err:any){
      alert(err.response.data.message) 
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="container">
        <h1 id="loginWord">Sign Up</h1>
        <div className="inputContainer">
          <label
            htmlFor="fullName"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            <MdPerson />
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="inputBox"
            onChange={handleInputChange}
            value={formData.fullName}
            placeholder="Name"
          />
        </div>
        <div className="inputContainer">
          <label
            htmlFor="email"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            <HiAtSymbol />
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="inputBox"
            onChange={handleInputChange}
            value={formData.email}
            placeholder="Email"
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password" style={{ fontSize: "20px" }}>
            <FaLock />
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="inputBox"
            onChange={handleInputChange}
            value={formData.password}
            placeholder="Password"
          />
        </div>
        <input type="submit" className="submitButton" />
        <h2 className="switchForm">Have an Account ? <Link  style={{backgroundColor:'white',color:"blue"}} to="/login">Login here</Link></h2>
      </form>
    </Fragment>
  );
}

export default Signup;
