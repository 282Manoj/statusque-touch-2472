import "./searchPage.css";
import Sidebar from "./sidebar";
import main from "../Image/main.PNG"

function Search() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="side">
          <Sidebar />
        </div>
        <div
          style={{ width: "80%"}}
          className="content"
        >
          <div className="overview">
            <h1>Keyword Overview</h1>
            <p>
              Dive into the largest keyword research database on the market and
              analyze everything you need to know about a keyword.
            </p>
          </div>
          <div className="input-box">
            <label>
              Enter from 1 to 100 keywords separated by commas 0/100
            </label>
            <br />
            <input type="text" />
            <button>Search</button>
            <p>Examples: loans movies how to buy audible books</p>
          </div>
          <div style={{marginTop:"-230px"}}>
            <img src={main} alt="" />
          </div>
        </div>

      </div>
    </>
  );
}

export default Search;
