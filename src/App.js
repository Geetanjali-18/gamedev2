import "./App.css"
// import Navbar from './components/Navbar/Navbar'
import GamePage from "./components/GamePage/GamePage";
import GithubPage from "./components/GithubPage/GithubPage";
import GithubCard from "./components/cards/GithubCard";
import Dash from "./components/Dash/Profile"
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/Home/Home";
import NewRelease from "./components/NewRelease/NewRelease";
import SignUp from "./pages/SignUp/SignUp"
import Login from "./pages/LogIn/LogIn"
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route exact path = "/" element = {<GithubPage/>}/> */}
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/dashboard" element = {<Dash/>}/>
        <Route exact path = "/gamepage" element = {<GamePage/>}/>
        <Route exact path = "/gameRelease" element = {<NewRelease/>}/>
        <Route exact path = "/register" element = {<SignUp/>}/>
        <Route exact path = "/login" element = {<Login/>}/>

      </Routes>
    </BrowserRouter>

    {/* <Navbar></Navbar> */}
    {/* <GithubPage></GithubPage> */}
    {/* <GithubCard></GithubCard> */}
    </>
  );
}
export default App;
