import {Routes,Route} from "react-router-dom";
import Login from "./Login";
import SignUp from "./signUp"
import Feature from "./feature"
import AfterFeature from "./AfterFeature"
import Home from "./Home";
import Search from "./searchPage"
function AllRoutes(){
    return<>
    <Routes>
        <Route path = "/" element={<Home/>}></Route>
        <Route path = "/signUp" element={<SignUp/>}></Route>
        <Route path = "/login" element={<Login/>}></Route>
        <Route path = "/feature" element={<Feature/>}></Route>
        <Route path = "/afterfeature" element={<AfterFeature/>}></Route>
        <Route path = "/search" element={<Search/>}></Route>

    </Routes>
    </>
}

export default AllRoutes;