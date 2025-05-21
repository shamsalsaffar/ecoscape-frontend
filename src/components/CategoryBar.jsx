import "../styles/CategoryBar.css";
import culturalstaybtn from "../assets/CULTURAL STAY.svg";
import ecolodgestaybtn from "../assets/ECO LODGE.svg";
import farmstaybtn from "../assets/FARM STAY BUTTON.svg";
import mountainretreatbtn from "../assets/MOUNTAIN RETREAT BUTTON.svg";
import nationalparkbtn from "../assets/NATIONAL PARK.svg";
import glampingsbtn from "../assets/GLAMPING BUTTON.svg";
import tinyhomebtn from "../assets/TINY HOME BUTTON.svg";
import wellnessretreatbtn from "../assets/WELLNESSS RETREAT.svg";
import wildfirebtn from "../assets/WILDFIRE.svg";
import treehousebtn from "../assets/TREE HOUSE.svg"


const CategoryBar = ({onSearch}) => {
  const handleClick = (category) => {
    const searchParams = {
      category: category, // tar capacity  från formuläret
    };
    // kollar om det finns en sök parameter att använda, och ifall det finns kör
    if (onSearch) {
      onSearch(searchParams);
    }
  };

  return (
    <div className="category-bar">
      <div className="category-button">
        <button onClick={() => handleClick('CULTURAL_STAY')}>
          <img src={culturalstaybtn} alt="Cultural Stay Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('ECO_LODGE')}>
          <img src={ecolodgestaybtn} alt="Eco Lodge Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('FARM_STAY')}>
          <img src={farmstaybtn} alt="Farm Stay Category" />
        </button>
      </div>


      <div className="category-button">
        <button onClick={() => handleClick('GLAMPING')}>
          <img src={glampingsbtn} alt="Glamping Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('MOUNTAIN_RETREAT')}>
          <img src={mountainretreatbtn} alt="Mountain Retreat Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick(' NATIONAL_PARK')}>
          <img src={nationalparkbtn} alt="National Park Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('TINY_HOME')}>
          <img src={tinyhomebtn} alt="Tiny Home Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('WELLNESS_RETREAT')}>
          <img src={wellnessretreatbtn} alt="Wellness Retreat Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('WILDLIFE_RETREAT')}>
          <img src={wildfirebtn} alt="Wildfire Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('TREE_HOUSE')}>
          <img src={treehousebtn} alt="Tree House Category" />
        </button>
      </div>
    </div>
  );
};


export default CategoryBar;

//     ECO_LODGE
//     GLAMPING
//     CULTURAL_STAY
//     NATIONAL_PARK
//     WILDLIFE_RETREAT
//     WELLNESS_RETREAT
//     TINY_HOME
//     TREE_HOUSE
//     MOUNTAIN_RETREAT
//     FARM_STAY
//     WHEELCHAIR_FRIENDLY
//     BABY_FRIENDLY
//     PET_FRIENDLY