import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { User, Mail, Lock, Eye } from 'lucide-react';
import SocialLogin from './SocialLogin'; 

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        const newUser = {
          name: data.name,
          email: data.email,
          role: 'user',
          createdAt: new Date()
        };
        
        axios.post('http://localhost:5000/users', newUser)
          .then(() => {
            reset();
            Swal.fire({
              title: "Success!",
              text: "Registration Complete",
              icon: "success",
              timer: 2000,
              showConfirmButton: false
            });
            navigate('/');
          });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#12a6a1] via-[#33c9c1] to-[#a7f3ef] p-4 font-sans relative overflow-hidden">
      
     
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
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
        <div className="flex items-center gap-8">
          <Link to="/login" className="text-white font-semibold hover:opacity-80 transition-all">
            Login
          </Link>
          <Link to="/signup" className="px-8 py-2 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-teal-500 transition-all">
            Sign Up
          </Link>
        </div>
      </div>

      
      <div className="w-full max-w-xl text-center mt-12">
        <h1 className="text-5xl font-bold text-white mb-3">Join Us!</h1>
        <p className="text-white/80 mb-8 text-lg">Start your fitness journey with us today</p>

        <div className="space-y-4 max-w-md mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
            
          
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-teal-500 transition-colors" />
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all text-gray-700"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name.message}</p>}
            </div>

            
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                 <Mail className="w-5 h-5 group-focus-within:text-teal-500 transition-colors" />
              </span>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all text-gray-700"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email.message}</p>}
            </div>

  
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-teal-500 transition-colors" />
              <input
                type="password"
                {...register("password", { 
                    required: "Password is required", 
                    minLength: { value: 6, message: "Minimum 6 characters" } 
                })}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-4 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all text-gray-700"
              />
              <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer" />
              {errors.password && <p className="text-red-500 text-xs mt-1 ml-2">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#00aba5] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-[#008e89] active:scale-95 transition-all mt-2"
            >
              Create Account
            </button>
          </form>

       
          <div className="flex items-center py-2">
            <div className="flex-1 border-t border-gray-300/50"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-300/50"></div>
          </div>

        
          <SocialLogin />

          <p className="text-center text-sm text-gray-700 font-medium">
            Already have an account? 
            <Link to="/login" className="text-black font-bold hover:underline ml-1">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;