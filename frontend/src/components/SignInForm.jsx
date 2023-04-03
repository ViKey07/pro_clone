import React, { useState } from "react";


function SignInForm({ onSwitchToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle sign in logic here, such as calling an API endpoint to authenticate the user
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-fields">

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>

      <br />

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>

      <br />
      </div>
      <div className="sub-btn">
      <button className="home-in" type="submit">Sign In</button>

      <button className="home-up" type="button" onClick={onSwitchToSignUp}>Sign Up</button>
      </div>
      <br />
    </form>
  );
}

export default SignInForm;
