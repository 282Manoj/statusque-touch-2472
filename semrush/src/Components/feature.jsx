import "./feature.css"
import Card from "./Card"
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
    <div className="right">
        <img src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
  </div>

  <div className="main2" >
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

  <div className="grid-box">
   {arr.map((el)=>{
    return(<Card data={{...el}} />)
   })}
  </div>
  </>
);
}
export default Feature;
