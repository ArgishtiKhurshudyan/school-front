import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom"
import "./auth.scss"
// import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getLoginStart} from "../../redux/user/actions";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {Toastify} from "../../components/toasterror";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [closeIcon, setCloseIcon] = useState(false)
  const navigate = useNavigate()
  const {isLoginStart, isLoginSuccess, errorMessage} = useSelector(state => state.user)
  const dispatch = useDispatch();


  useEffect(() => {
    if (errorMessage) {
      Toastify(errorMessage, 'error')
    }
  }, [errorMessage])

  const handleChange = (e) => {
    setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
  };

  const handleClick = (e) => {
    console.log('1010', e)
    e.preventDefault()
    dispatch(getLoginStart({credentials: credentials}))
    if (isLoginSuccess) {
     alert("success")
    }
  }

  const handleClickIcon = (e) => {
    setCloseIcon(!closeIcon)
  }

  return (
    <div className="auth-container">
      <form
        onSubmit={handleClick}
        className="auth-form login-form">
       <div className="form-div">
         <label className="reg-label">Email</label>
         <input
           type="email"
           placeholder="email"
           id="email"
           onChange={handleChange}
           required
         />
         <div className="closeIcon">
           <label className="reg-label">Password</label>
           <input
             type={closeIcon ? "text" : "password"}
             placeholder="password"
             id="password"
             onChange={ handleChange }
             required
           />
           <div onClick={ handleClickIcon } className="icon">{closeIcon ? <RemoveRedEyeIcon/> :
             <VisibilityOffIcon/>}</div>
         </div>
         <button className='button' type="submit">{isLoginStart ? "loading..." : "Submit"}</button>
         {/*<button className='button' type="submit">12132</button>*/}
         {/*<Link to="/register" style={{width: "90px"}}>*/}
         {/*<button className="signUp-btn button">signUp</button>*/}
         {/*</Link>*/}
       </div>
      </form>
    </div>

  );
};

export default Login;