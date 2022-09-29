import "./AfterFeature.css"
import Card2 from "./Card2"
let arr=[
  {title:"keyword search",
des:"Find the best keywords to supercharge your digital marketing strategy. Discover the organic and advertising value of any keyword based on search volume, intent, keyword difficulty, number of results, CPC, competition level, SERP Features, variations, and more.",
img:"https://cdn.semrush.com/features/static/features/second-level/keyword-overview.e5ed8cacb46b.svg"
},
{title:"keyword search",
des:"Find the best keywords to supercharge your digital marketing strategy. Discover the organic and advertising value of any keyword based on search volume, intent, keyword difficulty, number of results, CPC, competition level, SERP Features, variations, and more.",
img:"https://cdn.semrush.com/features/static/features/second-level/keyword-overview.e5ed8cacb46b.svg"
},
{title:"keyword search",
des:"Find the best keywords to supercharge your digital marketing strategy. Discover the organic and advertising value of any keyword based on search volume, intent, keyword difficulty, number of results, CPC, competition level, SERP Features, variations, and more.",
img:"https://cdn.semrush.com/features/static/features/second-level/keyword-overview.e5ed8cacb46b.svg"
},
{title:"keyword search",
des:"Find the best keywords to supercharge your digital marketing strategy. Discover the organic and advertising value of any keyword based on search volume, intent, keyword difficulty, number of results, CPC, competition level, SERP Features, variations, and more.",
img:"https://cdn.semrush.com/features/static/features/second-level/keyword-overview.e5ed8cacb46b.svg"
},
{title:"keyword search",
des:"Find the best keywords to supercharge your digital marketing strategy. Discover the organic and advertising value of any keyword based on search volume, intent, keyword difficulty, number of results, CPC, competition level, SERP Features, variations, and more.",
img:"https://cdn.semrush.com/features/static/features/second-level/keyword-overview.e5ed8cacb46b.svg"
},
{title:"keyword search",
des:"Find the best keywords to supercharge your digital marketing strategy. Discover the organic and advertising value of any keyword based on search volume, intent, keyword difficulty, number of results, CPC, competition level, SERP Features, variations, and more.",
img:"https://cdn.semrush.com/features/static/features/second-level/keyword-overview.e5ed8cacb46b.svg"
},
]
function AfterFeature() {
  return <>
  <div className="main2">
  <div className="afterDiv">
    <h1>Semsush Keyword Research</h1>
    <p>Boost your traffic and conquer the SERPs with Semrush's <span>keyword research </span>tools</p>
    <button>Start Now</button>
   </div>
   
   <div className="grid-box">
    {arr.map((el,i)=>{
      return <Card2 key={i} data={{...el}}/>
    })}
   </div>
  </div>
  </>;
}
export default AfterFeature;
