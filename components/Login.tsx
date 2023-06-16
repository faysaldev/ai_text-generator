"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div className="bg-[#10a37f] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://i.ibb.co/Jn49Jkr/Screenshot-2023-06-10-171245-removebg-preview-1.png"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
