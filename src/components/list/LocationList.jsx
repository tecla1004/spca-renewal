import React from "react";
import LocationCard from "../card/LocationCard";
import Image1 from "../../../public/assets/svgs/location-1.svg";
import Image2 from "../../../public/assets/svgs/location-2.svg";
import Image3 from "../../../public/assets/svgs/location-3.svg";
import Button from "../common/button";

const cardItems = [
  {
    id: 1,
    locationImage: Image1,
    locationTitle: "Vancouver Office ",
    locationAddress: "1205 E 7th Ave",
    locationDistance: 5.9,
    isAdoptionAvailable: true,
    isVolunteerAvailable: false,
  },
  {
    id: 2,
    locationImage: Image2,
    locationTitle: "Burnaby Office ",
    locationAddress: "4000 Grange Street",
    locationDistance: 12.5,
    isAdoptionAvailable: false,
    isVolunteerAvailable: true,
  },
  {
    id: 3,
    locationImage: Image3,
    locationTitle: "Richmond Office ",
    locationAddress: "1234 W Stone Avenue",
    locationDistance: 12.5,
    isAdoptionAvailable: false,
    isVolunteerAvailable: true,
  },
];

const LocationList = () => {
  return (
    <div className="flex flex-col items-start">
      <span>
        <h1 className="text-3xl font-bold ml-8">All BC SPCA Locations</h1>
        <p className="text-xs ml-8 mt-2">
          Showing all 25 locations within 200km from Vancouver, BC
        </p>
      </span>
      <div className="flex gap-2 ml-8 mt-4">
        <Button label="All" />
        <Button
          label="Adoption"
          bgColor="bg-gray-40"
          textColor="text-blue-900"
        />
        <Button
          label="Volunteer"
          bgColor="bg-gray-40"
          textColor="text-blue-900"
        />
      </div>
      <div className="flex justify-center items-center ml-4 mt-8 overflow-y-scroll max-h-96">
        <ul>
          <li>
            <LocationCard items={cardItems} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationList;
