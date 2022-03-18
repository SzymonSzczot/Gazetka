import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="passsword"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </article>
    </>
  );
}

export default Login;
