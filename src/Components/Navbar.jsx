import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthContext'; 
import useCart from '../Components/UseCart'; 
import Swal from 'sweetalert2';

import { 
    MapPin, 
    Phone, 
    Facebook, 
    Twitter, 
    Instagram, 
    Youtube, 
    ChevronDown, 
    ShoppingCart, 
    Menu, 
    LogOut 
} from 'lucide-react';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="w-full">
            {/* Top Bar */}
            <div className="bg-teal-500 text-white py-2 px-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-2">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Kashimpur, Gazipur Sadar / Gazipur</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>+880 01713-027875</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:opacity-80 transition"><Facebook size={18} /></a>
                            <a href="#" className="hover:opacity-80 transition"><Twitter size={18} /></a>
                            <a href="#" className="hover:opacity-80 transition"><Instagram size={18} /></a>
                            <a href="#" className="hover:opacity-80 transition"><Youtube size={18} /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/">
                            <img 
                                src="/assets/logo.png" 
                                alt="Logo" 
                                className="h-10 w-auto"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            <Link to="/" className="text-orange-500 font-semibold hover:text-orange-600 transition">
                                Home
                            </Link>
                            <a href="#about" className="text-gray-700 font-medium hover:text-orange-500 transition">About Us</a>
                            
                            <div className="relative group flex items-center gap-1 cursor-pointer text-gray-700 font-medium hover:text-orange-500 transition">
                                <span>Our Services</span>
                                <ChevronDown size={16} />
                            </div>

                            <div className="relative group flex items-center gap-1 cursor-pointer text-gray-700 font-medium hover:text-orange-500 transition">
                                <span>Our Products</span>
                                <ChevronDown size={16} />
                            </div>
                            
                            <a href="#blogs" className="text-gray-700 font-medium hover:text-orange-500 transition">Blogs</a>
                        </nav>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-4">
                            {/* Cart Section */}
                            <Link to="/cart-details" className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition">
                                <div className="relative">
                                    <ShoppingCart size={24} />
                                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                                        {cart?.length || 0}
                                    </span>
                                </div>
                                <span className="font-medium hidden sm:inline">Cart</span>
                            </Link>
                            
                           
                            {
                                user ? (
                                    <button 
                                        onClick={handleLogOut}
                                        className="hidden lg:flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2.5 rounded transition"
                                    >
                                        <LogOut size={18} />
                                        Logout
                                    </button>
                                ) : (
                                    <Link 
                                        to="/login"
                                        className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-2.5 rounded transition"
                                    >
                                        Login
                                    </Link>
                                )
                            }

                          
                            <button className="lg:hidden text-gray-700">
                                <Menu size={28} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;