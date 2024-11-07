import Image from "next/image";
import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center" >
            <div className="section-heading">
              <div className="tag">Boost your productivity</div>
            </div>
          </div>
          <h2 
            className="mt-5 text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">A more effective way to track progress</h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]">Effortlessly turn your ideas into a fully functional, responsive, SaaS
            website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <Image src={pyramidImage} alt="Pyramid Image" height={262} width={262} className="hidden md:block absolute -right-36 -top-32" />
          <Image src={tubeImage} alt="Tube Image" height={248} className="hidden md:block absolute bottom-24 -left-36" />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;