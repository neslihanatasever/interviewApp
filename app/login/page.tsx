"use client"
import { useState, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [error, setError] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate()

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    return (
        <main className="mx-auto container w-full h-[100vh] flex flex-col justify-center items-center text-center gap-9">
            <div className="login">
                <form onSubmit={handleLogin} className="flex flex-col gap-5">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-b border-t h-12 flex items-center justify-center px-10"
                        type="email"
                        placeholder="email"
                        value={email}
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-b border-t h-12 flex items-center justify-center px-10"
                        type="password"
                        placeholder="password"
                        value={password}
                    />
                    <button className="border-b border-t h-12 flex items-center justify-center px-10" type="submit">
                        <span className="transition-all ease-out hover:-translate-y-1">Login</span>
                    </button>
                    {error && <span className="text-red-500">{error}</span>}
                </form>
            </div>
        </main>
    );
}
