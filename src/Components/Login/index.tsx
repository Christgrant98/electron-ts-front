import "./Login.less"
import { Fragment, useState } from "react";
import { AsyncDispatch } from "../../Data/Utils/Redux";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../Data/Actions/Navigation";
import { Pages } from "../../Data/Objects/State";
import { ILoginUserPayload, IRegisterUserPayload } from "../../Data/Interfaces/User";
import { loginUserAsync, registerUserAsync } from "../../Data/Actions/User";


export default function LoginPage(){
  const dispatch: AsyncDispatch = useDispatch();
  const [showRegister, setShowRegister] = useState(false)


  const changeCurrentPage = () => dispatch(setActivePage(Pages.HOME))
  const attemptLoginUser = (payload: ILoginUserPayload) => dispatch(loginUserAsync(payload))
  const attemptRegisterUser = (payload: IRegisterUserPayload) => dispatch(registerUserAsync(payload))

  const handleLoginUser = (event) => {
    event.preventDefault();

    const username = event?.target?.username?.value;
    const password = event?.target?.password?.value;

    attemptLoginUser({username, password}).then(() => {
      changeCurrentPage()
    })

  }
  const handleRegisterUser = (event) => {
    event.preventDefault();

    const username = event?.target?.username?.value;
    const email = event?.target?.email?.value;
    const password = event?.target?.password?.value;

    attemptRegisterUser({username, password, email}).then(() => {
      changeCurrentPage()
    })

  }

  const renderLoginForm = () => {
    return (
    <Fragment>
      <h1>Login</h1>
      <form id="login-form" onSubmit={handleLoginUser }>
        <input id="username" placeholder="Username" />
        <input id="password" type="password" placeholder="Password" />
        <br/>
        <button type="submit">Login</button>
      </form>
      <span>Have an account? <span onClick={() => setShowRegister(true)}>Register</span></span>
    </Fragment>
    );
  }
  
  const renderRegisterForm = () => {
    return (
      <Fragment>
      <h1>Register</h1>
        <form id="login-form" onSubmit={handleRegisterUser}>
          <input id="username" placeholder="Username"/>
          <input id="email" placeholder="Email"/>
          <input id="password" type="password" placeholder="Password"/>
          <br/>
          <button type="submit">Register</button>
        </form>
        <span>Already have an account? <span onClick={()=> setShowRegister(false)}>Login</span></span>
      </Fragment>
    )
  }

  const renderContent = () =>{ 
    if(showRegister){
      return renderRegisterForm();
      }
      return renderLoginForm();
    }

  return (
    <div className="login-page">
        {renderContent()}
    </div>
  );
}