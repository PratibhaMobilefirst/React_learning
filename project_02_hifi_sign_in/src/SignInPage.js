import React from 'react';

const SignInPage = () => {
  return (
    <div className="bg-image min-h-screen p-6 flex items-center justify-center lg:justify-around">
      {/* Background Image */}
      <div className="hidden min-h-[620px] lg:flex items-start justify-start flex-col">
      </div>

      {/* Sign-In Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="p-8 md:p-16 bg-white shadow-lg rounded-lg">
          {/* HIFI Logo and Title */}
          <div className="flex items-center mb-6">
            <img
              src="hifi_logo.png"
              alt="HIFI Logo"
              className="w-10 h-10 mr-2"
            />
            <h1 className="text-2xl font-bold">HIFI Pay</h1>
          </div>

          <h2 className="text-xl font-semibold mb-2">Welcome</h2>
          <p className="mb-6">Sign in to HIFI Pay</p>

          {/* Sign-In with Google */}
          <div className="flex items-center justify-between mb-6">
            <img
              src="google_logo.png"
              alt="Google Logo"
              className="w-8 h-8 mr-2 cursor-pointer"
            />
            <span className="text-sm text-blue-500 cursor-pointer">
              Sign in Using Google
            </span>
          </div>

          {/* Sign-In Form */}
          <form className="space-y-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm mb-1">Email address</label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-md py-2 px-3"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full border rounded-md py-2 px-3 pr-10"
                  placeholder="Enter your password"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {/* Eye icon for password visibility */}
                  {/* You can replace the eye icon with your preferred icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
            >
              Sign In
            </button>
          </form>

          {/* Forgot password and Get Started */}
          <div className="mt-6 text-center">
            <p className="text-sm">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </p>
            <p className="text-sm mt-2">
              Don’t have an account?{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Get Started
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
