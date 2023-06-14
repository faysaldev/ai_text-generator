"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div className="bg-[#10a37f] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://i.ibb.co/mt6rQqk/download-removebg-preview.png"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In To use EasyAi
      </button>
    </div>
  );
};

export default Login;
