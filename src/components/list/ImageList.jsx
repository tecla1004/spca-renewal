import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const ImageList = ({ images }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex justify-center items-end rounded-xl bg-gray-20 hover:bg-light-blue cursor-pointer w-72 h-72"
          >
            <div className="absolute top-0 left-0 mt-7 ml-6 text-xl font-bold">
              {image.title}
            </div>
            <div className="absolute top-0 right-0 rounded-full p-3 mt-6 mr-6 bg-white hover:bg-primary hover:text-white">
              <AiOutlineArrowRight className="text-xl" />
            </div>
            <Image
              src={image.image}
              alt="image description"
              width={230}
              height={183}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
