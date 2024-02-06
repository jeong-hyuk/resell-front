import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
// import { User } from "./User";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("사용자 정보:", user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("로그아웃 성공");

      // 로그아웃 성공 시, 업데이트된 로그인 상태를 반영
      setIsLoggedIn(false);

      // 로그아웃이 성공하면 다시 로그인 페이지로 이동
      navigate("/");
      z;
      window.location.reload();
    } catch (error) {
      console.error("로그아웃 오류", error);
    }
  };

  return (
    <header className="flex justify-between">
      <Link to="/">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/register">회원가입</Link>
            {user && <User user={user} />}
          </>
        )}
      </nav>
    </header>
  );
}
