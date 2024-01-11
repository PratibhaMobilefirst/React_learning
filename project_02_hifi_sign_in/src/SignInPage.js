import React, { useState } from 'react';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
    validateForm();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(true);
    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(email.trim() !== '' && password.trim() !== '');
  };

  const handleBlur = (field) => {
    if (field === 'email') {
      setIsEmailValid(email.trim() !== '');
    } else if (field === 'password') {
      setIsPasswordValid(password.trim() !== '');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:justify-around">
     
      <div className="hidden lg:flex items-center justify-start flex-col w-1/2 p-4">
       
        <p className="text-3xl font-bold text-gray-800">Your Logo or Text Here</p>
      </div>

      
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="w-full md:w-2/3 lg:w-1/2 p-8 bg-white shadow-lg rounded-lg">
        
          <div className="flex items-center mb-6">
            <img
              src="hifi_logo.svg"
              alt="HIFI Logo"
              className="w-10 h-10 mr-2"
            />
            <h1 className="text-2xl font-bold">HIFI Pay</h1>
          </div>

          <h2 className="text-xl font-semibold mb-2">Welcome</h2>
          <p className="mb-6">Sign in to HIFI Pay</p>

          
          <div className="flex items-center justify-between mb-6">
            <span className="w-[260px] sm:w-[234px] h-[42.49px] px-2 py-1 bg-white rounded-md border border-[#B0BABF] ">
              <img
                src="https://staging-internal.d1nwfechdidmfz.amplifyapp.com/_next/static/media/googleLogo.5fd18ff9.svg"
                alt="Google Logo"
                className="w-5 h-8 mr-2 cursor-pointer flex-col justify-center items-center gap-2 inline-flex"
              />
              Sign in Using Google
            </span>
          </div>

          {/* Sign-In Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm mb-1">
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur('email')}
                className={`w-full border rounded-md py-2 px-3 ${
                  isEmailValid ? '' : 'border-red-500'
                }`}
                placeholder="Email address"
              />
              {!isEmailValid && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm mb-1">
                
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password" 
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={() => handleBlur('password')}
                  className={`w-full border rounded-md py-2 px-3 pr-10 ${
                    isPasswordValid ? '' : 'border-red-500'
                  }`}
                  placeholder="Password"
                />
                
              </div>
              {!isPasswordValid && (
                <p className="text-red-500 text-sm mt-1">Password is required</p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 ${
                !isFormValid && 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!isFormValid}
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
