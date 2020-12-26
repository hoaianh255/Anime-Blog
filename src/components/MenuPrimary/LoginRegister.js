import React from 'react';
import PropTypes from 'prop-types';
import TwitterLogin from "react-twitter-login";
import GoogleLogin from 'react-google-login';
const LoginRegister = props => {
  return (
    <div className="row " id="loginAndRegister">
        <div className="col-lg-4 p-4">
          <p className="note">No account yet? Registering is <strong>free</strong>, <strong>easy</strong>, and <strong>private</strong>. Discuss in the forum, contribute to the Encyclopedia, build your own MyAnime lists, and more.</p>
          <input type="text" name="email" placeholder="Email (We'll send a sign-in key)" />
          <button className="actLoginRegister">Register</button>
        </div>
        <div className="col-lg-4 p-4">
            {/* facebook login button */}

            <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true"></div>
      
            {/* twitter login button */}
                    {/* <div style={{margin: "10px 0"}}></div> */}
            {/* google login button */}
            <div style={{margin: "10px 0"}}></div>
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                render={renderProps => (
                  <button onClick={renderProps.onClick} className="loginBtn loginBtn--google">Login with Google</button>
                )}
                cookiePolicy={'single_host_origin'}
              />
        </div>
        <div className="col-lg-4 p-4">
          <input type="text" name="username" placeholder="Username or Email" />
          <input type="text" name="password" placeholder="Password" />
          <input type="checkbox" name="remember" id="remember"/>
          <label htmlFor="remember">Remember me</label>
          <a href="#" className="forgotLink">Forgot it ?</a>
          <button className="actLoginRegister">Login</button>
        </div>
    </div>
    
  );
};

LoginRegister.propTypes = {
  
};

export default LoginRegister;