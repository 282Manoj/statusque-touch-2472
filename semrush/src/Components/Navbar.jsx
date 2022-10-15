
import { Button,} from "@chakra-ui/react";
import {ChevronDownIcon} from"@chakra-ui/icons"
import {Link} from "react-router-dom"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bigBox" style={{ border: "1px solid black" }}>
      <div className="img_nav">
      <div style={{display:"flex"}}>
        <img
          src="https://cdn.semrush.com/__static__/favicon.3cd418d5bb49.ico"
          alt=""
        />
        <h3 style={{fontWeight:"bold", marginLeft:"5px"}}>SEMRUSH</h3>
      </div>
      <div className="menuItems">
       <Link style={{textDecoration:"none",color:"white"}} to="/feature"> <p>Features</p></Link>
        <p>Pricing</p>
        <p>
          <Menu >
            <MenuButton  className="drop" borderWidth='0px' as={Button} rightIcon={<ChevronDownIcon />}>
              Resources
            </MenuButton>
            <MenuList zIndex={2} >
              <MenuItem  bgColor="black">Download</MenuItem>
              <MenuItem bgColor="black">Create a Copy</MenuItem>
              <MenuItem bgColor="black">Mark as Draft</MenuItem>
              <MenuItem bgColor="black">Delete</MenuItem>
              <MenuItem bgColor="black">Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </p>
        <p>
        <Menu>
            <MenuButton  className="drop" borderWidth='0px' as={Button} rightIcon={<ChevronDownIcon />}>
              Company
            </MenuButton>
            <MenuList zIndex={2}>
              <MenuItem bgColor="black">Download</MenuItem>
              <MenuItem bgColor="black">Create a Copy</MenuItem>
              <MenuItem bgColor="black">Mark as Draft</MenuItem>
              <MenuItem bgColor="black">Delete</MenuItem>
              <MenuItem bgColor="black">Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </p>
        <p>
        <Menu>
            <MenuButton className="drop" borderWidth='0px' as={Button} rightIcon={<ChevronDownIcon />}>
              App Center
            </MenuButton>
            <MenuList zIndex={2}>
              <MenuItem bgColor="black">Download</MenuItem>
              <MenuItem bgColor="black">Create a Copy</MenuItem>
              <MenuItem bgColor="black">Mark as Draft</MenuItem>
              <MenuItem bgColor="black">Delete</MenuItem>
              <MenuItem bgColor="black">Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </p>
        <p><Menu>
            <MenuButton  className="drop"  borderWidth='0px' as={Button} rightIcon={<ChevronDownIcon />}>
              Extra tools
            </MenuButton>
            <MenuList zIndex={2}  w={200}  >
              <MenuItem  mt={300} fontSize={20} bgColor="black" >Create a Copy</MenuItem>
              <MenuItem bgColor="black" >Mark as Draft</MenuItem>
              <MenuItem bgColor="black" >Delete</MenuItem>
              <MenuItem bgColor="black" >Download</MenuItem>
              <MenuItem bgColor="black" >Attend a Workshop</MenuItem>
            <br />
            <br />
            </MenuList>
          </Menu></p>
      </div>
      </div>
      <div className="loginBox"  style={{border:"1px solid balck"}}>
        <p><Menu>
            <MenuButton className="drop"  borderWidth='0px' as={Button} rightIcon={<ChevronDownIcon />}>
              EN
            </MenuButton>
            <MenuList>
              <MenuItem bgColor="black">Download</MenuItem>
              <MenuItem bgColor="black">Create a Copy</MenuItem>
              <MenuItem bgColor="black">Mark as Draft</MenuItem>
              <MenuItem bgColor="black">Delete</MenuItem>
              <MenuItem bgColor="black">Attend a Workshop</MenuItem>
            </MenuList>
          </Menu></p>
        <Link to="/login"><button style={{ backgroundColor:"transparent",color:"white",padding:"6px 10px",border:"1px solid white",borderRadius:"4px",cursor:"pointer",fontSize:"18px"}}>Log In</button></Link>
       <Link to="/signUp" ><button style={{ color:"black", backgroundColor:"#00BC98",padding:"6px 10px",border:"1px solid transparent",borderRadius:"8px",cursor:"pointer",fontSize:"18px"}}>Sign Up</button></Link> 
      </div>
    </div>
  );
};
export default Navbar;

//http://www.wsidigital.ie/wp-content/uploads/semrush-logo-v03.jpg
