import FoodItem from "./FoodItem";

function FoodList(props) {


  return (
    <ul className="list-group">
     {props.item.map((eachFood,index)=>{
      return (<FoodItem key={index} item={eachFood}></FoodItem>)
     })}
    </ul>
  );
}
export default FoodList;
