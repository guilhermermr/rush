"use client";

import Header from "@/components/Header";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlerRegister = (e: any) => {
    e.preventDefault();

    password !== confirmPassword
      ? alert("Passwords do not match")
      : console.log("Register form submitted");
  };

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center my-4">Login</h2>
            <form onSubmit={handlerRegister}>
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
                  type={showPassword ? "text" : "password"}
                  className="form-control ml-5 border-b-2 border-gray-300 focus-visible:outline-none"
                  id="password"
                  name="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <span
                  className="cursor-pointer text-slate-500 ml-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  see pass
                </span>
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control ml-5 border-b-2 border-gray-300 focus-visible:outline-none"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  required
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
                <span
                  className="cursor-pointer text-slate-500 ml-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  see pass
                </span>
              </div>
              <button
                type="submit"
                className="btn  w-100 bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-700 width-full"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
