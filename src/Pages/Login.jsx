import React, { useContext } from "react";
import { AuthContext } from "../assets/context/AuthContext";
import { Link } from "react-router";

const Login = () => {
  const { signInWithGoogle, logInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then((res) => {
        console.log(res.user);
        alert("Log in successful");
      })
      .catch((err) => console.log(err));
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        alert("google Register successful");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero bg-gray-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-[600px] shrink-0 shadow-2xl">
          <div className="card-body h-auto">
            <form className="fieldset" onSubmit={handleLogin}>
              {/* email */}
              <label className="label text-xl font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full text-xl"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label text-xl font-semibold">Password</label>
              <input
                type="text"
                name="password"
                className="input w-full text-xl"
                placeholder="Password"
                required
              />

              <div>
                <Link
                  className="link link-hover textarea-md"
                  to="/forget-password"
                >
                  Forgot password?
                </Link>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
            {/* google btn */}
            <button
              className="btn bg-white text-black border-[#e5e5e5] mt-2"
              onClick={handleGoogle}
            >
              <svg
                aria-label="Google logo"
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p className="text-center mt-2 text-lg font-semibold">
              Don't have an account?{" "}
              <Link className="text-blue-500 underline" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
