import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Footer,
  Home,
  Header,
  Search,
  PlayLists,
  Tracks,
  Topheader,
  Login,
  Signup,
} from "./components";
// import { Signup, Login, Home } from "./pages";

function App() {
  return (
    <>
      <div className="gcs">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signUp" element={<Signup></Signup>}></Route>
          </Routes>
          <div className="mainCont">
            <div className="Cont">
              <Header></Header>
              <div className="pageCont">
                <Topheader></Topheader>
                <Routes>
                  <Route path="/home" element={<Home></Home>}></Route>
                  <Route path="/search" element={<Search></Search>}></Route>
                  <Route
                    path="/playlist/:id"
                    element={<PlayLists></PlayLists>}
                  ></Route>
                  <Route path="/tracks" element={<Tracks></Tracks>}></Route>
                  {/* <Route path="/" element={<Home />} /> */}
                  {/* <Route path="/signup" element={<Signup />} /> */}
                  {/* <Route path="/login" element={<Login />} /> */}
                </Routes>
              </div>
            </div>
            <Footer className="footer"></Footer>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
