import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext'; 
import { Mail, Lock, Eye } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Login successfully",
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
        navigate(from, { replace: true });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Invalid Email or Password",
          icon: "error",
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          role: 'user', 
        };
        axios.post('http://localhost:5000/users', userInfo)
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#12a6a1] via-[#33c9c1] to-[#a7f3ef] p-4 font-sans">
      
      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
            <div className=" p-1 rounded-sm">
               <img 
                src="/assets/logo.png" 
                alt="Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
        </div>
        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <Link to="/login" className="text-white font-semibold hover:opacity-80 transition-all">
            Login
          </Link>
          <Link to="/signup" className="px-8 py-2 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-teal-500 transition-all">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-xl text-center">
        <h1 className="text-5xl font-bold text-white mb-3">Welcome Back!</h1>
        <p className="text-white/80 mb-10 text-lg">We missed you, Please provide your credential</p>

        {/* Login Form Container */}
        <div className="space-y-4 max-w-md mx-auto">
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Email Input */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-teal-500 transition-colors" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all text-gray-700"
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-teal-500 transition-colors" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full pl-12 pr-12 py-4 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all text-gray-700"
              />
              <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer hover:text-gray-600" />
            </div>

            <div className="text-right">
              <Link to="/forgot-password" size="sm" className="text-black font-semibold text-sm hover:underline">
                Forget Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#00aba5] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-[#008e89] active:scale-95 transition-all"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center py-4">
            <div className="flex-1 border-t border-gray-300/50"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-300/50"></div>
          </div>

         
          <div className="flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className="w-24 h-16 bg-white rounded-xl shadow-md flex items-center justify-center hover:bg-gray-50 active:scale-90 transition-all"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;