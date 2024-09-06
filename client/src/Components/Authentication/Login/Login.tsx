import React, { Fragment,useState } from "react";
import "./Login.css";
import {Link, useNavigate  } from "react-router-dom";
import { HiAtSymbol } from "react-icons/hi2";
import { FaLock } from "react-icons/fa";
import axios from "axios";

function Login() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit =async (e:any) => {
    e.preventDefault()
    try{
      const res=await axios.post("http://localhost:5000/login",formData)
      localStorage.setItem('token',res.data.token)

      if(res.status===200){
        alert("login successfull")
        setFormData({
          email:'',
          password:''
        })
      
        navigate('/homePage')

      }
    }catch(err:any){
      alert(err?.response?.data?.message)
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="container">
        <h1 id="loginWord">Login</h1>
        <div className="inputContainer">
          <label
            htmlFor="userEmail"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            <HiAtSymbol />
          </label>
          <input
          name="email"
            type="email"
            id="userEmail"
            value={formData.email}
            className="inputBox"
            onChange={handleInputChange}
            placeholder="email"
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password" style={{ fontSize: "20px" }}>
            <FaLock />
          </label>
          <input
          name="password"
            type="password"
            id="password"
            value={formData.password}
            className="inputBox"
            onChange={handleInputChange}
            placeholder="password"
          />
        </div>
        <input type="submit" className="submitButton" />
        <h2 className="switchForm">Don't have an Account ? <Link style={{backgroundColor:'white',color:"blue"}} to="/signup">Sign up here</Link></h2>
      </form>
    </Fragment>
  );
}

export default Login;
