# Shared Layouts

## RootLayout
Path: `app/layout.js`

```jsx
import Navbar from './components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import AuthProvider from './components/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SignBuddy',
  description: 'Learn and recognize common sign-language gestures with your camera.',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider>
            <Navbar/>
            {children}
          </AuthProvider>
        </body>
      </html>
  )
}
```

## Navbar
Path: `app/components/Navbar.js`

```jsx
"use client"

import React from 'react';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const {status} = useSession();
  const isAuth = status === "authenticated";
  const router = useRouter();
  return (
    <nav className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-mono font-bold cursor-pointer" onClick={() => router.replace("/profile")}>SignBuddy</h1>
        {isAuth ? <button className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={() => signOut({ callbackUrl: "/" })}>Logout</button> : <button className="text-white bg-slate-500 px-4 py-2 rounded hover:bg-slate-600" onClick={() => router.replace("/")}>Login</button>}
      </div>
    </nav>
  );
};

export default Navbar;
```
