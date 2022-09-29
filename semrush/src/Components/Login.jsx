import "./signUp.css";
import google from "../Image/google.png";
import walmart from "../Image/walmart.png";
import fobres from "../Image/forbes.png";
import pg from "../Image/p&g.png";
import tesla from "../Image/tesla.svg";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate=useNavigate()
    let obj=JSON.parse(localStorage.getItem("arr"))||{};
    console.log("login",obj);
  const [login,setLogin]=useState({email:"",password:""});
   const handleLogin=()=>{
    if(obj.email==login.email&&obj.password==login.password){
        alert("login successful!")
           navigate("/feature")
    }
   }
    return (
        <>
        <div style={{height:"100vh"}}>
        <div style={{marginTop:"20px",marginLeft:"20px"}}>
            <img src="https://www.semrush.com/static/images/semrush-logo-small.65111a70bc78fa1d295b6cea65680c1d.svg" alt="photo" />
        </div>
        <div className="main">
            <div className="left">
                <h2>Login</h2>
                <div className="googleSignIn">
                    <img
                        style={{ width: "20px", height: "20px" }}
                        src={google}
                        alt="photo"
                    />
                    <p>Log in with Google</p>
                </div>
                <div className="hrline">
                    <p>or</p>
                </div>

                <div className="Email">
                    <label>Email</label>
                    <br />
                    <input onChange={(e)=>setLogin({...login,email:e.target.value})} type="text" />
                </div>
                <div className="password">
                    <label htmlFor="">Password</label>
                    <br />
                    <input onChange={(e)=>setLogin({...login,password:e.target.value})} type="text" />
                </div>

                <div className="buttondiv">
                    <button onClick={handleLogin}>Login</button>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <span>Don't have semrush  account?</span>
                    <span style={{ color: " red", marginLeft: "2px" }}>Sign up</span>
                </div>
            </div>

            <div style={{backgroundColor:"#6edbff"}} className="right">
               <div >
                <img src="https://www.semrush.com/static/images/semrushman.4deb494408156a6748f227586cd1491c.svg" alt="" />
               </div>
            </div>

        </div>
        </div>
        </>
    );
};

export default Login;
