import React from "react";
import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    setUsername("")
    setEmail("")
    setPassword("")
  };

  return (
    <form className="display-6 m-5 px-5 text-center " onSubmit={handleSubmit}>
      <h2 className="display-2 text-danger">FORMS</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span>{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={handleUsername}
          value={username}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span>{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={handleEmail}
          value={email}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          required
        />
      </div>

      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </form>
  );
};

export default Form;
