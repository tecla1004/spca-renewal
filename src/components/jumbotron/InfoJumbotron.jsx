import React from "react";
import { ContentBlockB } from "./contentBlock/index";

const InfoJumbotron = ({ title, description }) => {
  return (
    <div
      className="w-full px-4 py-8 md:px-10 md:py-32"
      style={{
        backgroundImage: `url('./assets/svgs/bg-mission-banner.svg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center">
        <ContentBlockB
          title={title}
          description={description}
          rootClass="font-semibold text-white"
          className="w-full md:w-1/2"
        />
      </div>
    </div>
  );
};

export default InfoJumbotron;
