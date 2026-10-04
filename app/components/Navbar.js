"use client"

import React from 'react';
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const {status} = useSession();
    const isAuth = status === "authenticated";
    const router = useRouter();

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <h1 className="cursor-pointer font-mono text-2xl font-bold tracking-tight text-gray-900" onClick={() => router.replace("/profile")}>SignBuddy</h1>
        {isAuth ? (
          <button
            className="min-h-11 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-200"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        ) : (
            <button
                className="min-h-11 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-200"
                onClick={() => router.replace("/")}
            >
                Login
            </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
