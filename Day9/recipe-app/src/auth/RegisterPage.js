import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";


import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function createUser(e) {
    e.preventDefault();

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="container">
      <div className="card card-body mt-5">
        <h1 className="m-0">Register</h1>

        <form onSubmit={createUser}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-secondary">Register</button>
        </form>
      </div>
    </div>
  );
}
