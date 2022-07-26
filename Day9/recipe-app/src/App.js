import React, { useEffect ,useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import RecipePage from "./recipes/RecipePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import Navbar from "./misc/navbar";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase/firebase'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {setUser(user)});
  });
  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} ></Navbar>
        <Routes>
          <Route path="/" element={<RecipePage />}></Route>
          <Route path="/login" element={<LoginPage />}>
            {" "}
          </Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
