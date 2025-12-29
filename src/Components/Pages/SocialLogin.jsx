import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext"; 
import axios from "axios";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const navigate = useNavigate();
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSubmit = () => {
        googleSignIn()
            .then((result) => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: 'user', // default role
                };
                
               
                axios.post('http://localhost:5000/users', userInfo)
                    .then(() => {
                        navigate('/');
                    });
            })
            .catch(error => {
                Swal.fire({ title: "Error", text: error.message, icon: "error" });
            });
    };

    return (
        <div className="mt-4">
            <div className="divider text-gray-400 text-xs mb-4">OR</div>
            <button 
                onClick={handleGoogleSubmit} 
                className="btn w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 border-none"
            >
                <FaGoogle className="text-red-500" /> Google
            </button>
        </div>
    );
};

export default SocialLogin;