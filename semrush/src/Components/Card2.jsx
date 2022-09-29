import "./card2.css";

function Card2({ data }) {
  // console.log(data);
  const { title, des, img } = data;
  // console.log(title,des,img);
  return (
    <>
    <div className="card-box">
      <div className="cardDiv">
        <div>
          <h1>{title}</h1>
          <p>{des}</p>
        </div>
       
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div  className="button-div">
        <div>
          <button>Try For Free</button>
        </div>
        <div>Learn more</div>
      </div>
      </div>
    </>
  );
}
export default Card2;
