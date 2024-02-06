import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

const MainPage = () => {
  // const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옴

  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth);
  //     console.log("로그아웃 성공");

  //     // 로그아웃이 성공하면 다시 로그인 페이지로 이동
  //     navigate("/login");
  //     window.location.reload();
  //   } catch (error) {
  //     console.error("로그아웃 오류", error);
  //   }
  // };

  return (
    <>
      메인 페이지
      {/* 로그인 페이지로 이동하는 링크 */}
      {/* <br /> */}
      {/* <Link to="/login">Login</Link> */}
      <br />
      {/* 회원가입 페이지로 이동하는 링크 */}
      {/* <Link to="/register">Register</Link> */}
    </>
  );
};

export default MainPage;
