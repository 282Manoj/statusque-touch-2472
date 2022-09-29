import "./feature.css"
import Card from "./Card"
import feature from "../Image/feature.PNG"
import { Link } from "react-router-dom";
let arr=[
    {title:"KeyWord Research",
    description:"Bring traffic to your site by finding the best keywords",
    tools:2,
     },
    {title:"KeyWord Research",
    description:"Bring traffic to your site by finding the best keywords",
    tools:2,
     },
    {title:"KeyWord Research",
    description:"Bring traffic to your site by finding the best keywords",
    tools:2,
     },
    {title:"KeyWord Research",
    description:"Bring traffic to your site by finding the best keywords",
    tools:2,
     },
    {title:"KeyWord Research",
    description:"Bring traffic to your site by finding the best keywords",
    tools:2,
     },
    {title:"KeyWord Research",
    description:"Bring traffic to your site by finding the best keywords",
    tools:2,
     }
]
const Feature =()=>{
return(
  <>
  <div className="main">
    <div className="left">
        <div className="head"><h1>Semrush Features</h1></div>
        <div className="paraDiv">
            <p>Start solving your marketing challenges today with 55+ tools and reports on Semrush.</p>
        </div>
        <div className="buttonDiv">
            <button>Get started For Free</button>
        </div>
    </div>
    <div className="right1">
        <img src={feature} alt="" />
    </div>
  </div>

  <div className="main10" >
    <h4>Choose your area of interest</h4>
    <div className="typeDiv">
        <p>All</p>
        <p>SEO</p>
        <p>Content</p>
        <p>Market Research</p>
        <p>Advertising</p>
        <p>SMM&SERM</p>
    </div>
  </div>

  <div className="grid-box1">
   {arr.map((el)=>{
    return<Card data={{...el}} />
   })}
  </div>
  </>
);
}
export default Feature;
