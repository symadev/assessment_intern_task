import React, { useState, useEffect } from 'react';
import MarqueeSection from "./../MarqueeSection";
import FeatureSection from "./../FeatureSection";
import CardSection from "./../CardSection";
import VideoBanner from "./../VideoBanner"; 

const Home = () => {
   
    const [heroData, setHeroData] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
               
                const heroRes = await fetch('https://assessment-backend-7wwf.onrender.comapi/hero-section?populate=*');
                const heroJson = await heroRes.json();
                setHeroData(heroJson.data);

              
                const productRes = await fetch('https://assessment-backend-7wwf.onrender.com/api/products?populate=*');
                const productJson = await productRes.json();
                setProducts(productJson.data);

                setLoading(false);
            } catch (error) {
                console.error("Data fetching error:", error);
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    if (loading) {
        return <div className="h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="bg-white">
        
            {heroData && <VideoBanner data={heroData} />}

            <MarqueeSection />
            <FeatureSection />

           
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-10 border-b pb-4">
                        <h2 className="text-3xl font-bold text-black">Our Apparels</h2>
                        <a href="#" className="text-sm font-semibold text-gray-600 underline">See All Products</a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((item) => (
                            <CardSection key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;