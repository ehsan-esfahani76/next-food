"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";
import Image from "next/image";
export default function Header() {
  const images = [
    {
      image: "/assets/images/pngwing.com.png",
      title: "پیتزا مخلوط"
    },
    {
      image: "/assets/images/burger.png",
      title: "همبرگر"
    },
    {
      image: "/assets/images/salad.png",
      title: "سالاد"
    },
  ];
  return (
    <div className="bg-gray-600">
      <Swiper>
        {images.map((item) => (
          <SwiperSlide>
            <div className={`h-screen flex justify-around items-center`}>
              <div className="w-1/2">
                <h1 className="text-yellow-600 text-2xl md:text-7xl">
                  {item.title}
                </h1>
                <p className="lg:pt-10 lg:block text-2xl">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
                <div className="lg:block hidden lg:mt-10">
                  <Button to={"/menu"}>سفارش</Button>
                </div>
              </div>
              <div className="w-1/4 max-w-[100%] h-1/2 relative">
              <Image
                src={item.image}
                fill
                priority
                alt="header"
              />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
