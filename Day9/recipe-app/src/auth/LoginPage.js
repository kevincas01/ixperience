import React, { useState } from "react";
import {signInWithEmailAndPassword } from "firebase/auth";


import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
export default function LoginPage() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function signUserIn(e) {
    e.preventDefault();

    try {
      const userCred = await signInWithEmailAndPassword(
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
            <h1 className="m-0">Login</h1>
    
            <form onSubmit={signUserIn}>
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
              <button  className="btn btn-secondary">Login</button>
            </form>
          </div>
        </div>
      );
}
