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


const CategoryBar = () => {
  const handleClick = (category) => {
    console.log(category);
  };

  return (
    <div className="category-bar">
      <div className="category-button">
        <button onClick={() => handleClick('Cultural Stay')}>
          <img src={culturalstaybtn} alt="Cultural Stay Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('Eco Lodge')}>
          <img src={ecolodgestaybtn} alt="Eco Lodge Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('Farm Stay')}>
          <img src={farmstaybtn} alt="Farm Stay Category" />
        </button>
      </div>


      <div className="category-button">
        <button onClick={() => handleClick('Glamping')}>
          <img src={glampingsbtn} alt="Glamping Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('Mountain Retreat')}>
          <img src={mountainretreatbtn} alt="Mountain Retreat Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('National Park')}>
          <img src={nationalparkbtn} alt="National Park Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('Tiny Home')}>
          <img src={tinyhomebtn} alt="Tiny Home Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('Wellness Retreat')}>
          <img src={wellnessretreatbtn} alt="Wellness Retreat Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('Wildfire')}>
          <img src={wildfirebtn} alt="Wildfire Category" />
        </button>
      </div>

      <div className="category-button">
        <button onClick={() => handleClick('Tree House')}>
          <img src={treehousebtn} alt="Tree House Category" />
        </button>
      </div>
    </div>
  );
};

export default CategoryBar;
