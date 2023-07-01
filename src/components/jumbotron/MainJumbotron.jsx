import { useState, useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";
import { ContentBlockA } from "./contentBlock/index";

const MainJumbotron = ({
  title,
  description,
  image,
  imagePosition = "left" | "right",
  bgColor,
  fontColor,
  btnColor,
  btnText,
  btnTextColor,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div
      className={classNames(
        "w-full px-4 pt-8 md:px-20 md:pt-32",
        bgColor || "bg-gray-300"
      )}
    >
      <div className="flex flex-col gap-8 md:flex-row items-center md:mx-14 md:pl-2">
        {isMobile ? (
          <>
            <ContentBlockA
              title={title}
              description={description}
              fontColor={fontColor}
              btnColor={btnColor}
              btnText={btnText}
              btnTextColor={btnTextColor}
              className="w-full md:w-1/2"
            />
            {image && (
              <div>
                <Image
                  src={image}
                  alt="image description"
                  width={650}
                  height={650}
                />
              </div>
            )}
          </>
        ) : (
          <>
            {image && (
              <div>
                <Image
                  src={image}
                  alt="image description"
                  width={650}
                  height={650}
                />
              </div>
            )}
            <ContentBlockA
              title={title}
              description={description}
              fontColor={fontColor}
              btnColor={btnColor}
              btnText={btnText}
              btnTextColor={btnTextColor}
              className="w-full md:w-1/2"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MainJumbotron;
