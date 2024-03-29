"use client";
import React from "react";
import Link from "next/link";
import Icons from "../icons/icons";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const MainNav = () => {
  const cartItemCount = 5;
  const { data, status } = useSession();
  const router = useRouter();
  const handleAuthAction = (e) => {
    e.preventDefault();
    if (data) {
      signOut();
    } else {
      // 로그인되어 있지 않은 경우, 로그인 페이지로 리디렉션
      router.push("/login");
    }
  };
  return (
    <>
      <div className="flex justify-between items-center fixed w-[1000px] h-[65px] top-0 shadow-md bg-white z-[100] relative;">
        <Link
          className="text-blue-800 text-xl font-semibold cursor-pointer px-[18px] py-0"
          href="/">
          3조화이팅
        </Link>
        <div className="flex gap-7 items-center px-[18px] py-0 font-semibold">
          <Link
            href="/"
            className="cursor-pointer hover:text-gray-600 transition duration-100 ease-in-out relative">
            <span>
              <Icons
                className="mb-[2px] text-3xl"
                type="ShoppingCartOutlinedIcon"
                size="large"
                color="primary"
              />
              {cartItemCount > 0 && (
                <span className="absolute top-0 -right-[5px] bg-blue-500 rounded-full text-white text-xs px-1">
                  {cartItemCount}
                </span>
              )}
            </span>
          </Link>
          <Link
            href="/login"
            onClick={handleAuthAction}
            className="cursor-pointer hover:text-gray-600 transition duration-100 ease-in-out">
            <span>
              <Icons
                className="mb-[2px] text-3xl"
                type="LoginIcon"
                size="large"
                color="primary"
              />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainNav;
