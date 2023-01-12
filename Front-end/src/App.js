import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Footer,
  Header,
  Search,
  PlayLists,
  Tracks,
  Topheader,
  Login,
  Signup,
  Songs
} from "./components";


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
                  <Route path="/search" element={<Search></Search>}></Route>
                  <Route path="/songs" element={<Songs></Songs>}></Route>
                  <Route
                    path='/playlist/:id'
                    element={<PlayLists></PlayLists>}
                  ></Route>
                  <Route path="/tracks" element={<Tracks></Tracks>}></Route>
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
