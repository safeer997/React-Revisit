import FoodItem from "./FoodItem";
import { useState } from "react";

function FoodList({ item }) {
  let [activeItems, setActiveItems] = useState([]);

  const handleOnclickBuyButton = (eachFood, event) => {
    let newItems = [...activeItems, eachFood];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {item.map((eachFood, index) => {
        return (
          <FoodItem
            handleOnclickBuyButton={(event) =>
              handleOnclickBuyButton(eachFood, event)
            }
            key={index}
            item={eachFood}
            bought={activeItems.includes(eachFood)}
          ></FoodItem>
        );
      })}
    </ul>
  );
}
export default FoodList;
