import { Fragment, useState } from "react";
import { AsyncDispatch } from "../../Data/Utils/Redux";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../Data/Actions/Navigation";
import { Pages } from "../../Data/Objects/State";
import { ILoginUserPayload, IRegisterUserPayload } from "../../Data/Interfaces/User";
import { loginUserAsync, registerUserAsync } from "../../Data/Actions/User";
import "../../Styles/index.css"
import {CustomButton} from '../../Utils/CustomButton'

import { Form, Input, Divider } from "antd"

export default function LoginPage(){
  
  const dispatch: AsyncDispatch = useDispatch();
  const attemptLoginUser = (payload: ILoginUserPayload) => dispatch(loginUserAsync(payload))
  const attemptRegisterUser = (payload: IRegisterUserPayload) => dispatch(registerUserAsync(payload))
  const changeCurrentPage = () => dispatch(setActivePage(Pages.HOME))
  const [showRegister, setShowRegister] = useState(false)
  const {Item} = Form
  const [form] = Form.useForm();

  const handleLoginUser = (event) => {
    const email = event?.loginEmail;
    const password = event?.loginPassword;

    attemptLoginUser({email, password}).then(() => {
      changeCurrentPage()
    })

  }
  const handleRegisterUser = (event) => {
    const username = event?.username;
    const email = event?.registerEmail;
    const password = event?.registerPassword;

    attemptRegisterUser({username, password, email}).then(() => {
      form.resetFields();
      setShowRegister(false)
    })
  }

  const renderLoginForm = () => {
    return (
      <div className="main-container">
        <div className="second-container">
          <Fragment>
            <h1>Login</h1>
            <Form form={form} id="login-form" onFinish={handleLoginUser}>
              <Item
                label="Email"
                name="loginEmail" 
                rules={[{ required: true, message: 'Please enter your email' }]}
              >
                <Input placeholder="@example123"/>
              </Item>
              <Item
                label="Password"
                name="loginPassword"
                rules={[{ required: true, message: 'Please enter your password' }]}
              >
                <Input.Password placeholder="Enter your password"/>
              </Item>
              <CustomButton buttonText="Login" />
            </Form>
            <Divider />
            <span style={{ color: '#000000' }}>
              Don't have an account?{' '}
              <span className="auth-text-button" onClick={() => setShowRegister(true)}>
                Sign up
              </span>
            </span>
          </Fragment>
        </div>
      </div>
    );
  }
  
  const renderRegisterForm = () => {
    return (
      <div className="main-container">
        <div className="second-container">
          <Fragment>
            <h1>Register</h1>
            <Form
              form={form}
              id="register-form"
              onFinish={handleRegisterUser}
            >
              <Item
                label="Username"
                name="username" 
                rules={[{ required: true, message: 'Please enter your username' }]}
              >
                <Input placeholder="Enter your username" />
              </Item>
              <Item
                label="Email address"
                name="registerEmail" 
                rules={[{ required: true, message: 'Please enter your email' }]}
              >
                <Input type="email" placeholder="example@mail.com" />
              </Item>
              <Item
                label="Password"
                name="registerPassword"
                rules={[{ required: true, message: 'Please enter your password' }]}
              >
                <Input.Password placeholder="Enter your password" />
              </Item>
              <CustomButton buttonText= "Register"/>
            </Form>
            <Divider/>
            <span style={{ color: '#000000' }}>
              Already have an account?{' '}
              <span className="auth-text-button" onClick={() => setShowRegister(false)}>
                Sign in
              </span>
            </span>
          </Fragment>
        </div>
      </div>
    );
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