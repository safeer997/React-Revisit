import FoodItem from "./FoodItem";

function FoodList({item}) {
  const handleOnclickBuyButton = (event) => {
    console.log(event);
    console.log(`${item} is being bought !`);
  };

  return (
    <ul className="list-group">
     {item.map((eachFood,index)=>{
      return (<FoodItem handleOnclickBuyButton={handleOnclickBuyButton} key={index} item={eachFood}></FoodItem>)
     })}
    </ul>
  );
}
export default FoodList;
