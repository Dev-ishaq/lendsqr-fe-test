import React from 'react'
import ImgContent from './Image/ImgContent';
import LoginContent from './LoginContent';
import Brand from './Brand';

const Login = () => {

  return (
      <div className="log-form">
        <div className="img-login">
            <div className="img">
                <div className="brand">
                <Brand />
                </div>
                <div className="main-img">
                    <ImgContent />
                </div>
            </div>
            <div className="login-form">
                {/* <div className="main-login"> */}
                <LoginContent />
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default Login
