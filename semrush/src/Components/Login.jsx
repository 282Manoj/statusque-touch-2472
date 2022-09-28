import "./signUp.css";
import google from "../Image/google.png";
import walmart from "../Image/walmart.png";
import fobres from "../Image/forbes.png";
import pg from "../Image/p&g.png";
import tesla from "../Image/tesla.svg";

const Login = () => {
    return (
        <>
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
                    <input type="text" />
                </div>
                <div className="password">
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="text" />
                </div>

                <div className="buttondiv">
                    <button>Login</button>
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
        </>
    );
};

export default Login;
