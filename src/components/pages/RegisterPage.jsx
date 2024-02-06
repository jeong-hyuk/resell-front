import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/firebase";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  // const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const onChange = (event) => {
  //   const {
  //     target: { name, value },
  //   } = event;
  //   if (name === "email") {
  //     setEmail(value);
  //   }
  //   if (name === "password") {
  //     setPassword(value);
  //   }
  // };

  // const signUp = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     console.log("user", userCredential.user);
  //     navigate("/");
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log("error with signUp", errorCode, errorMessage);
  //   }
  // };

  return (
    <></>
    // <div className="App">
    //   <h2>회원가입 페이지</h2>
    //   <form>
    //     <div>
    //       <label>이메일 : </label>
    //       <input type="email" value={email} name="email" onChange={onChange} required></input>
    //     </div>
    //     <div>
    //       <label>비밀번호 : </label>
    //       <input type="password" value={password} name="password" onChange={onChange} required></input>
    //     </div>
    //     <button onClick={signUp}>회원가입</button>
    //   </form>
    // </div>
  );
};

export default RegisterPage;
