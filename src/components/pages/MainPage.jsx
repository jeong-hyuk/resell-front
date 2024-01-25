import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      메인 페이지
      {/* 로그인 페이지로 이동하는 링크 */}
      <br />
      <Link to="/login">Login</Link>
      <br />
      {/* 회원가입 페이지로 이동하는 링크 */}
      <Link to="/register">Register</Link>
    </div>
  );
};

export default MainPage;
