import React, { useState } from "react";

function SignUpForm() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle sign up logic here, such as calling an API endpoint to create a new user
  };

  return (
    <form onSubmit={handleSubmit}>
      

      

  
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>

      <br />
 
      <button className="home-up" type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
