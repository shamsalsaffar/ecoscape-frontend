import RenewableEnergySustainabilityIcon from "../icons/RenewableEnergySustainabilityIcon";
import WasteRecyklingSustainabilityIcon from "../icons/WasteRecyklingSustainabilityIcon";
import CarFreeSustainabilityIcon from "../icons/CarFreeSustainabilityIcon";
import WaterFlowReducerSustainabilityIcon from "../icons/WaterFlowReducerSustainabilityIcon";
import EnergySavingLightsSustainability from "../icons/EnergySavingLightsSustainability";
import GreenBuildingSustainabilityIcon from "../icons/GreenBuildingSustainabilityIcon";
import AppliancesClassASustainabilityIcon from "../icons/AppliancesClassASustainabilityIcon";
import RecoverReuseRainwaterSustainability from "../icons/RecoverReuseRainwaterSustainability";
import TowelChangeOnRequestSustainabilityIcon from "../icons/TowelChangeOnRequestSustainabilityIcon";
import EnvironmentalFriendlyFurniture from "../icons/EnvironmentalFriendlyFurniture";
import HighEfficiencyBoilerSustainabilityIcon from "../icons/HighEfficiencyBoilerSustainabilityIcon";
import BiodiversitySustainabilityIcon from "../icons/BiodiversitySustainabilityIcon";
import SolarPanelsSustainabilityIcon from "../icons/SolarPanelsSustainabilityIcon";
import EcoCleaningSustainabilityIcon from "../icons/EcoCleaningSustainabilityIcon";

import "../styles/listingpagesustainabilityicons.css";

const ListingPageSustainabilitySymbols = ({ listing }) => {
  const sustainabilities = [

    {
      key: "RENEWABLE_ENERGY",
      Icon: RenewableEnergySustainabilityIcon,
    },
    {
      key: "CAR_FREE",
      Icon: CarFreeSustainabilityIcon,
    },
    {
      key: "ECO_CLEANING",
      Icon: EcoCleaningSustainabilityIcon,
    },
    {
      key: "WASTE_RECYCLE",
      Icon: WasteRecyklingSustainabilityIcon,
    },
    {
      key: "ENERGY_SAVING_LIGHTS",
      Icon: EnergySavingLightsSustainability,
    },
    {
      key: "GREEN_BUILDING",
      Icon: GreenBuildingSustainabilityIcon,
    },
    {
      key: "SOLAR_PANELS", 
      Icon: SolarPanelsSustainabilityIcon,
    },
    {
      key: "WATER_FLOW_REDUCER",
      Icon: WaterFlowReducerSustainabilityIcon,
    },
    {
      key: "RECOVER_REUSE_RAINWATER",
      Icon: RecoverReuseRainwaterSustainability,
    },
    {
      key: "TOWEL_CHANGE_REQUEST",
      Icon: TowelChangeOnRequestSustainabilityIcon,
    },
    {
      key: "APPLIANCES_CLASS_A",
      Icon: AppliancesClassASustainabilityIcon,
    },
    {
      key: "HIGH_EFFICIENCY_BOILER",
      Icon: HighEfficiencyBoilerSustainabilityIcon,
    },
    {
      key: "ENVIRONMENTAL_FRIENDLY_FURNITURE",
      Icon: EnvironmentalFriendlyFurniture,
    },
    {
      key: "BIODIVERSITY",
      Icon: BiodiversitySustainabilityIcon,
    }

  ]
  return (
    <div className="listing-page-sustainability-symbols-section">
        <h3 className="sustainability-heading">Sustainability</h3>
            <div className="sustainability-container">
              {sustainabilities.map((sustainability) => {
                if (listing.sustainability.includes(sustainability.key)) {
                  return (
                    <div key={sustainability.key} className="sustainability">
                      <sustainability.Icon className="sustainability-icon" />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
  );  
};
export default ListingPageSustainabilitySymbols;



{/* <RenewableEnergySustainabilityIcon />
      <WasteRecyklingSustainabilityIcon />
      <CarFreeSustainabilityIcon/>
      <WaterFlowReducerSustainabilityIcon />
      <EnergySavingLightsSustainability />
      <GreenBuildingSustainabilityIcon />
      <AppliancesClassASustainabilityIcon />
      <RecoverReuseRainwaterSustainability />
      <TowelChangeOnRequestSustainabilityIcon />
      <EnvironmentalFriendlyFurniture />
      <HighEfficiencyBoilerSustainabilityIcon />
      <BiodiversitySustainabilityIcon />
      <SolarPanelsSustainabilityIcon />
      <EcoCleaningSustainabilityIcon /> */}