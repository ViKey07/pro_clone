import GoogleLogin from 'react-google-login';
import googleLogin from './services/googleLogin';
import './App.css';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import Left_Asset from './assets/Asset 412.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  googleBtn: {
    background: 'transparent',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    '&:hover': {
      background: '#C23E34',
    },
  },
});

function App() {

  const [showSignUp, setShowSignUp] = useState(false);

  const handleSwitchToSignUp = () => {
    setShowSignUp(true);
  };

  const classes = useStyles();

  const responseGoogle = async (response) => {
    let googleResponse = await googleLogin(response.accessToken);
    console.log(googleResponse);
    console.log(response);
  };

  return (
    <div className="App">

      <Navbar />

      <section className='container2'>
        <div className='image_sample'>
          <img className='left-img' src={Left_Asset} />
        </div>

        <div className='right-div'>
          <p className='para'>Access world's first community <br/>
            for students and alumni.</p>
          <div>
            {showSignUp ? (
              <SignUpForm />
            ) : (
              <SignInForm onSwitchToSignUp={handleSwitchToSignUp} />
            )}
          </div>

          <GoogleLogin 
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className={classes.googleBtn} // Use the custom class from makeStyles()
          />
        </div>
      </section>
    </div>
  );
}

export default App;
