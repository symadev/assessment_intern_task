import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '.././Components/Context/AuthContext'; 

const UseCart = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !!user?.email, 
        queryFn: async () => {
            
            const token = localStorage.getItem('access-token');

            
            const res = await axios.get(`http://localhost:5000/cart?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            return res.data;
        },
    });

    return [cart, refetch];
};

export default UseCart;