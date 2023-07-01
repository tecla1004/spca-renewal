import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import MapView from "@/components/mapView/MapView";
import LocationList from "@/components/list/LocationList";
import LocationSearchBar from "../../components/searchBar/LocationSearchBar";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const index = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:gap-8">
        <div className="flex flex-col gap-10 mt-4">
          <span className="flex justify-between items-center font-semibold">
            <Link href="/">
              <button className="flex items-center text-gray-100 bg-transparent pt-4 px-4">
                <MdOutlineArrowBackIosNew className="mr-1" />
                Back
              </button>
            </Link>
            <LocationSearchBar />
          </span>
          <LocationList />
        </div>
        <MapView />
      </div>
      <Footer />
    </>
  );
};

export default index;
