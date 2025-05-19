import FridgeAmenityIcon from "../icons/FridgeAmenityIcon";
import DishwasherAmenityIcon from "../icons/DishwasherAmenityIcon";
import WashingMachineIcon from "../icons/WashingMachineIcon";
import StoveAmenityIcon from "../icons/StoveAmenityIcon";
import MicrowaveAmenityIcon from "../icons/MicrowaveAmenityIcon";
import WiFiAmenityIcon from "../icons/WiFiAmenityIcon";
import TVAmetinyIcon from "../icons/TVAmetinyIcon";
import ParkingAmenityIcon from "../icons/ParkingAmenityIcon";
import KitchenAmenityIcon from "../icons/KitchenAmenityIcon";
import BabyCribAmenityIcon from "../icons/BabyCribAmenityIcon";
import BabyChairAmenityIcon from "../icons/BabyChairAmenityIcon";
import BicykleAmenityIcon from "../icons/BicykleAmenityIcon";
import FireAlarmAmenityIcon from "../icons/FireAlarmAmenityIcon";
import BreakfastIncludedAmenityIcon from "../icons/BreakfastIncludedAmenityIcon";
import WheelChairAmenityIcon from "../icons/WheelChairAmenityIcon";
import ElectricityVehicleCharge from "../icons/ElectricityVehicleCharge";
import PetFriendlyAmenityIcon from "../icons/PetFriendlyAmenityIcon";

import "../styles/listingpageamenities.css";

const ListingPageAmenities = ({ listing }) => {
  const amenities = [
    {
      key: "HAS_FRIDGE",
      label: "Fridge",
      Icon: FridgeAmenityIcon,
    },

    {
      key: "HAS_WASHING_MACHINE",
      label: "Washing Machine",
      Icon: WashingMachineIcon,
    },
    {
      key: "HAS_DISHWASHER",
      label: "Dishwasher",
      Icon: DishwasherAmenityIcon,
    },
    {
      key: "HAS_STOVE",
      label: "Stove",
      Icon: StoveAmenityIcon,
    },
    {
      key: "HAS_MICROWAVE",
      label: "Microwave",
      Icon: MicrowaveAmenityIcon,
    },
    {
      key: "HAS_WIFI",
      label: "Wifi",
      Icon: WiFiAmenityIcon,
    },
    {
      key: "HAS_TV",
      label: "TV",
      Icon: TVAmetinyIcon,
    },
    {
      key: "HAS_PARKING",
      label: "Parking",
      Icon: ParkingAmenityIcon,
    },
    {
      key: "HAS_KITCHEN",
      label: "Kitchen",
      Icon: KitchenAmenityIcon,
    },
    {
      key: "HAS_CRIB",
      label: "Baby Crib",
      Icon: BabyCribAmenityIcon,
    },
    {
      key: "HAS_BABY_CHAIR",
      label: "Baby Chair",
      Icon: BabyChairAmenityIcon,
    },
    {
      key: "HAS_BICYCLE",
      label: "Bicykle to loan",
      Icon: BicykleAmenityIcon,
    },
    {
      key: "HAS_FIRE_ALARM",
      label: "Fire Alarm",
      Icon: FireAlarmAmenityIcon,
    },
    {
      key: "HAS_BREAKFAST_INCLUDED",
      label: "Breakfast included",
      Icon: BreakfastIncludedAmenityIcon,
    },
    {
      key: "HAS_ACCESSIBILITY",
      label: "Wheelchair Accessible",
      Icon: WheelChairAmenityIcon,
    },
    {
      key: "HAS_ELECTRICITY_VEHICLE_CHARGE",
      label: "Electricity Vehicle Charge",
      Icon: ElectricityVehicleCharge,
    },
    {
      key: "IS_PET_FRIENDLY",
      label: "Pet Friendly",
      Icon: PetFriendlyAmenityIcon,
    },
  ];

  return (
    <>
      <div className="listing-page-amenities">
        <h3 className="amenities-heading">Offered Amenities </h3>
        <div className="amenities-container">
          {amenities.map((amenity) => {
            if (listing.amenities.includes(amenity.key)) {
              return (
                <div key={amenity.key} className="amenity">
                  <amenity.Icon className="amenity-icon" />
                  <span className="amenity-text">{amenity.label}</span>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* <WheelChairAmenityIcon />
      <FridgeAmenityIcon />
      <DishwasherAmenityIcon />
      <WashingMachineIcon />
      <StoveAmenityIcon />
      <MicrowaveAmenityIcon />
      <BicykleAmenityIcon />
      <WiFiAmenityIcon />
      <TVAmetinyIcon />
      <ParkingAmenityIcon />
      <KitchenAmenityIcon />
      <FireAlarmAmenity />
      <BabyCribAmenityIcon />
      <BabyChairAmenityIcon />
      <ElectricityVehicleCharge />
      <PetFriendlyAmenityIcon /> */}
    </>
  );
};

export default ListingPageAmenities;
