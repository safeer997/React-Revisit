import { useSelector } from "react-redux";

const Counter = () => {
  const counterObj = useSelector((store) => store.counter);
  const counter = counterObj.counterValue;

  return (
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">The value of counter is :{counter}</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
    </div>
  );
};

export default Counter;
