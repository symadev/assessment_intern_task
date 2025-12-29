import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const partners = [
   
    { id: 1, src: "/assets/asana.png", alt: "Asana" },
    { id: 2, src: "/assets/alipay.png", alt: "Alipay" },
    { id: 3, src: "/assets/amazon.png", alt: "Amazon" },
    { id: 4, src: "/assets/pay.png", alt: "Amazon Pay" },
    { id: 5, src: "/assets/asana.png", alt: "Asana" },
    { id: 6, src: "/assets/alipay.png", alt: "Alipay" },
    { id: 7, src: "/assets/amazon.png", alt: "Amazon" },
    { id: 8, src: "/assets/pay.png", alt: "Amazon Pay" },
  ];

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        

        <div className="overflow-hidden">
          <Marquee pauseOnHover speed={100} gradient={false}>
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="mx-12 flex items-center justify-center"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-28 w-28 object-contain  transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
