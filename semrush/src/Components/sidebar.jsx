import "./sidebar.css";
import homeicon from "../Image/icons8-home-24.png"
function Sidebar(){
    return(
        <>
        <div style={{marginLeft:"10px"}}>
            <div className="flex3">
            <div> <img width="20px" src={homeicon} alt="photo"/></div>
             <p>Project</p>
            </div>
            <p>Domain Overview</p>
            <p>Traffic Analytics</p>
            <p>Oraganic Research</p>
            <p>Keyword Gap</p>
            <p> Backlink Gap</p>
            <p>KeyWord Magic Tool</p>
            <p>Keyword Maneger</p>
            <p>KeyWord Magic Tool</p>
            <p>Position Tracking</p>
            <p>Organic Traffic Insights</p>
            <p>Backlink Analytics</p>
            <p>Backlink Audit</p>
            <p>Link Building Tool</p>
            
            

        </div>
        </>
    )
}
export default Sidebar;