import Description from "../Description/Description";
import Option from "../Options/Options";
import { useState } from "react";
// import Feedback from "../Feedback/Feedback";

export default function App() {
  const [numClick, setNumClick] = useState(0);

  // const [value, setValue] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  function counterBtn() {
    setNumClick(numClick + 1);
  }
  const handleReset = () => {
    setNumClick(0);
  };


  return (
    <div>
      <Description />
      <Option
        value={numClick}
        onCount={counterBtn}
        onReset={handleReset}
      />
      {/* <Feedback /> */}
    </div>
  );
}
