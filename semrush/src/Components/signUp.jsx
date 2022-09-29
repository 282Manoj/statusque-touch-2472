import "./signUp.css";
import google from "../Image/google.png";
import walmart from "../Image/walmart.png";
import fobres from "../Image/forbes.png";
import pg from "../Image/p&g.png";
import tesla from "../Image/tesla.svg";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate=useNavigate()
    const [detail,setDetail]=useState({email:"",password:""});
    console.log(detail);
    const handleDetail=()=>{
    localStorage.setItem("arr",JSON.stringify(detail));
    alert("Registration successful")
    navigate("/login")
    }
    return (
        <>
    
        <div style={{marginTop:"20px",marginLeft:"20px"}}>
            <img src="https://www.semrush.com/static/images/semrush-logo-small.65111a70bc78fa1d295b6cea65680c1d.svg" alt="photo" />
        </div>
        <div className="main">
            <div className="left">
                <h2>Create your account</h2>
                <div className="googleSignIn">
                    <img
                        style={{ width: "20px", height: "20px" }}
                        src={google}
                        alt="photo"
                    />
                    <p>Continue with Google</p>
                </div>
                <div className="hrline">
                    <p>or</p>
                </div>

                <div className="Email">
                    <label>Email</label>
                    <br />
                    <input onChange={(e)=>setDetail({...detail,email:e.target.value})} type="text" />
                </div>
                <div className="password">
                    <label htmlFor="">Password</label>
                    <br />
                    <input onChange={(e)=>setDetail({...detail,password:e.target.value})} type="text" />
                </div>

                <div className="buttondiv">
                    <button onClick={handleDetail}>Create account</button>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <span>Already have an account?</span>
                    <span style={{ color: " red", marginLeft: "2px" }}>Log in</span>
                </div>
            </div>

            <div className="right">
                <div className="head">
                    <h2>
                        By using Semrush,my team saves a lot of time by working on the right
                        content and in a more data-driven way.
                    </h2>
                </div>
                <div style={{ color: "white" }}>
                    <h4>Idan Segal</h4>
                    <p>Organic Growth Lead</p>
                </div>
                <div style={{ color: "white" }}>
                    <span style={{ fontSize: "25px" }}>Wix.</span>com
                </div>
                <div style={{ marginTop: "30px", color: "white" }} className="hrline">
                    <p>TRUSTED BY</p>
                </div>

                
            <div className="companyName">
                <div>
                    <img src={tesla} alt="" />
                </div>
                <div>
                    <img src={pg} alt="" />
                </div>
                <div>
                    <img src={fobres} alt="" />
                </div>
                <div>
                    <img src={walmart} alt="" />
                </div>
            </div>
            </div>

        </div>
        </>
    );
};

export default SignUp;
