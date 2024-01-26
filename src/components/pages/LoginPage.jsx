import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("user with signIn", userCredential.user);
      navigate("/");
      window.location.reload();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error with signIn", errorCode, errorMessage);
    }
  };

  return (
    <div className="App">
      <h2>로그인 페이지</h2>
      <form>
        <div>
          <label>이메일 : </label>
          <input type="email" value={email} name="email" onChange={onChange} required></input>
        </div>
        <div>
          <label>비밀번호 : </label>
          <input type="password" value={password} name="password" onChange={onChange} required></input>
        </div>
        <button onClick={signIn}>로그인</button>
        {/* <button onClick={logOut}>로그아웃</button> */}
        <Link to="/register">회원가입</Link>
      </form>
    </div>
  );
};

export default LoginPage;
