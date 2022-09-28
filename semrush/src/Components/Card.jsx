import "./Card.css"
const Card=(props)=>{
    const {title,description,tools}=props.data;
    console.log(title, description,tools)
    return(
    <>
    <div className="box">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="learnMore">
            <p>Learn More</p>
            <p style={{backgroundColor:"#f6f7f8",borderRadius:"3px"}}>{`${tools} tools`}</p>
        </div>
    </div>
    </>
    )
}
export default Card;