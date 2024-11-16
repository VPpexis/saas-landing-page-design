"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import LeafIcon from "@/assets/leaf-icon.svg";
import ArrowIcon from "@/assets/arrow-icon.svg";
import LockIcon from "@/assets/lock-icon.svg";
import BellIcon from "@/assets/bell-icon.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LearnMoreBtn from "@/components/LearnMoreBtn";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
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
          <motion.img 
            src={pyramidImage.src} 
            alt="Pyramid Image" 
            height={262} 
            width={262} 
            className="hidden md:block absolute -right-36 -top-32" 
            style={{
              translateY,
            }}
          />
          <motion.img 
            src={tubeImage.src} 
            alt="Tube Image"
            height={248} 
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex flex-col justify-center gap-6 mt-10 md:flex-row">
          <div className="flex flex-col gap-6 md:flex-col lg:flex-row justify-center">
            <div className="justify-center">
              <LeafIcon className="mb-2" />
              <h1 className="font-bold mb-1">Integration ecosystem</h1>
              <p>Track your progress and motivate your efforts everyday</p>
              <LearnMoreBtn></LearnMoreBtn>
            </div>
            <div>
              <ArrowIcon className="mb-2" />
              <h1 className="font-bold mb-1">Goal setting and tracking</h1>
              <p>Set and track goals with manageable task breakdowns.</p>
              <LearnMoreBtn />
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-col lg:flex-row justify-center">
            <div>
              <LockIcon className="mb-2" />
              <h1 className="font-bold mb-1">Secure data encryption</h1>
              <p>Ensure your data&apos;s safety with top-tier encryption</p>
              <LearnMoreBtn />
            </div>
            <div>
              <BellIcon className="mb-2"/>
              <h1 className="font-bold mb-1">Customizable notification</h1>
              <p>Customize your notifications to fit your needs</p>
              <LearnMoreBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;