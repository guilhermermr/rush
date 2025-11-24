"use client";

import Header from "@/components/Header";
import { useState } from "react";
import Dashboard from "../dashboard/page";
import { useRouter } from "next/navigation";  


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handlerLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4001/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/dashboard');
      }else{        
        alert(data.message || "Erro ao fazer login");
        return;
      }

      

      alert("Login bem-sucedido!");
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Não foi possível conectar ao servidor.");
    }

  };

  return (
    <>
      <Header />

      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center my-4">Login</h2>
            <form onSubmit={handlerLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control ml-5 border-b-2 border-gray-300 focus-visible:outline-none"
                  id="email"
                  name="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control ml-5 border-b-2 border-gray-300 focus-visible:outline-none"
                  id="password"
                  name="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="btn  w-100 bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-700 width-full"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
