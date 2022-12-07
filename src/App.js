import Navbar from "./components/navbar/Navbar";
import './app.scss'
import Footer from "./components/footer/Footer";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLoginStart} from "./redux/user/actions";
import publicRoutes from "./routes/publicRoutes";
import privateRoutes from "./routes/privateRoutes";
import Sidebar from "./components/sidebar/Sidebar";
import Public from "./public";

function App() {
  const token = localStorage.getItem('access_token')
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      dispatch(getLoginStart())
    }
  }, [token, dispatch])

  const {isLoginSuccess} = useSelector((state) => state.user)

  useEffect(() => {
    if (isLoginSuccess) {
      window.location.replace("/dashboard")
    }
  })
  return (
    <div className={token && "App"}>
      <BrowserRouter>
        <ToastContainer/>
          {!token && <Public/>}
          {token &&  <Sidebar/>}
        <Routes>
          <Route path="/">
            {
              token && privateRoutes.map((rout) => (
                <Route exact path={rout.path} element={rout.component} key={rout.id}/>
              ))
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// !token ? publicRoutes.map((rout) => (
//   <Route exact path={rout.path} element={rout.component} key={rout.id}/>
// ))