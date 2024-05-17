import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      // console.log("cleanup function called !") this was getting printed due to strict mode in main component .
      clearInterval(timer);
    }; //we must always pass a cleanup function instead of directly returning !!!
  }, []);

  return (
    <p className="lead">
      This is the current time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
