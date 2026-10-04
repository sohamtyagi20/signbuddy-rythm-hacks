"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const SignUp = () => {
    const [busy, setBusy] = useState(false);
    const [message, setMessage] = useState("");
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    })
    const { name, email, password } = userInfo; 

    const handleChange = ({target}) => {
        const { name, value } = target;
        setUserInfo({...userInfo, [name]: value});
    };

    const handleSubmit = async (e) => {
        setBusy(true);
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(userInfo)
            })
            const data = await res.json();
            setMessage(res.ok ? "Account created. You can now log in." : data.error);
        } catch {
            setMessage("Registration is temporarily unavailable. Please try again.");
        } finally {
            setBusy(false);
        }
    };

    return (
        <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-5 py-8 md:px-8 md:py-12">
            <section className="w-full max-w-[420px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-7">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Create your account</h2>
                <p className="mt-2 text-base leading-6 text-slate-600">Start learning common sign-language gestures with SignBuddy.</p>
            </div>
            {message ? <p className="mb-5 rounded-lg bg-slate-100 px-4 py-3 text-sm text-slate-700" role="status">{message}</p> : null}
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">Name</label>
                <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="min-h-11 w-full rounded-[10px] border border-slate-300 bg-white px-4 py-2.5 text-gray-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
                    placeholder="Your Name"
                    label="Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                </div>
                <div className="mb-5">
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">Email</label>
                <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="min-h-11 w-full rounded-[10px] border border-slate-300 bg-white px-4 py-2.5 text-gray-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
                    placeholder="Your Email"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                </div>
                <div className="mb-6">
                <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-slate-700">Password</label>
                <input
                    id="password"
                    type="password"
                    minLength={8}
                    required
                    autoComplete="new-password"
                    className="min-h-11 w-full rounded-[10px] border border-slate-300 bg-white px-4 py-2.5 text-gray-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
                    placeholder="Your Password"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                </div>
                <button
                    type="submit"
                    className="min-h-11 w-full rounded-[10px] bg-blue-600 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                    disabled={busy}
                    style={{opacity: busy ? 0.5 : 1}}
                >
                    {busy ? "Creating account…" : "Register"}
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-slate-600">Already have an account? <Link href="/" className="font-semibold text-blue-600 underline-offset-4 hover:underline focus:outline-none focus:ring-4 focus:ring-blue-200">Login</Link></p>
            </section>
        </main>
    );
};

export default SignUp;
