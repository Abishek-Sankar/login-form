import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container w-full h-screen bg-slate-200 flex items-center justify-center">
      <form className="flex items-center justify-center flex-col gap-3 bg-slate-50 w-1/3 py-10 rounded-md px-10">
        <h4 className="text-2xl uppercase">login</h4>
        <input
          className="bg-transparent px-3 py-2 border-b-2 w-full outline-none"
          type="email"
          placeholder="email"
          name="email"
        />
        <input
          className="bg-transparent px-3 py-2 border-b-2 w-full outline-none"
          type="password"
          placeholder="password"
          name="password"
        />
        <button
          className="bg-green-500 text-white px-10 py-2 rounded-lg mt-5"
          type="submit"
        >
          login
        </button>
        <p>
          dont have an account?
          <Link className="text-blue-600" to="/register">
            register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
