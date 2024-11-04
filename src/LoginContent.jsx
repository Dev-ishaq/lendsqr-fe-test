import React, { useState } from 'react';

const LoginContent = () => {
    const [btn, setBtn] = useState('LOG IN');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="login">
           <div className="logs">
           <h1><b>Welcome!</b></h1>
            <p>Enter your details to login</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        />
                </div>
                <br />
                <div className="form-group">
                    <input
                        id='validate'
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="Password"
                    />
                    <span 
                        className="toggle-password" 
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </span>
                </div>
                <a href="" className='link'>Forget Password?</a>
                <br /><br />
                <div className="form-group">
                    <button onClick={() => setBtn('Loading...')}>{btn}</button>
                </div>
            </form>
           </div>
        </div>
    );
};

export default LoginContent;
