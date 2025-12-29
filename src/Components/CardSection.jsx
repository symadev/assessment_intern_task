import React, { useContext } from 'react';
import { Heart, Eye, Share2, ShoppingCart } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../Components/Context/AuthContext';
import useCart from '../Components/UseCart';

const CardSection = ({ product }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart(); 
  const baseUrl = "http://localhost:1337";


  const title = product?.products || product?.attributes?.products || "No Title";
  const minPrice = product?.MinPrice || product?.attributes?.MinPrice || 0;
  const maxPrice = product?.MaxPrice || product?.attributes?.MaxPrice || 0;

 
  let imageUrl = "https://via.placeholder.com/300"; 
  const imageData = product?.image || product?.attributes?.image;
  
  if (imageData) {
    if (imageData.url) {
        imageUrl = `${baseUrl}${imageData.url}`;
    } else if (imageData.data?.attributes?.url) {
        imageUrl = `${baseUrl}${imageData.data.attributes.url}`;
    }
  }

  const handleAddToCart = () => {
  if (user && user?.email) {
    const cartItem = {
      productId: product.id, 
      title,
      image: imageUrl,
      price: minPrice, 
      userEmail: user.email 
    };

    const token = localStorage.getItem('access-token');

    axios.post('http://localhost:5000/cart', cartItem, {
      headers: {
        authorization: `Bearer ${token}` 
      }
    })
    .then(res => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${title} added to cart`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      }
    })

    
     
        .catch(err => {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong while adding to cart!',
          });
        });
    } else {
      Swal.fire({
        title: "Please Login First!",
        text: "You must be logged in to add products to the cart.",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Okay"
      });
    }
  };

  return (
    <div className="max-w-[300px] bg-white rounded-2xl shadow-lg p-4 font-sans hover:shadow-xl transition-all duration-300">
      
   
      <div className="relative group overflow-hidden rounded-xl h-[250px]">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
     
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-red-50">
            <Heart size={18} className="text-red-500" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <Eye size={18} className="text-[#00b2b2]" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <Share2 size={18} className="text-[#00b2b2]" />
          </button>
        </div>
      </div>

     
      <div className="mt-4 text-left">
        <h3 className="text-lg font-bold text-gray-800">
          {title}
        </h3>
        
        <div className="mt-2 flex items-center gap-2 text-xl font-bold text-black">
          <span>৳{minPrice}</span>
          <span className="text-gray-400 font-normal">—</span>
          <span>৳{maxPrice}</span>
        </div>
      </div>

    
      <div className="mt-6 flex gap-3">
        <button 
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-2 bg-[#e0f7f7] text-[#00b2b2] py-2.5 rounded-lg font-bold text-xs hover:bg-[#00b2b2] hover:text-white transition-all">
          <ShoppingCart size={16} />
          Add To Cart
        </button>
        <button className="flex-1 bg-[#00b2b2] text-white py-2.5 rounded-lg font-bold text-xs hover:bg-[#009696] transition-all">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CardSection;