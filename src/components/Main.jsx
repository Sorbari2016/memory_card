import { useState } from "react";
import Hero from "./Hero";
import Form from "./Forms/Form";
import { generalInfo } from "../utilities/utility";

const Main = () => {
  // stored the click state of the cta button
  let [isClicked, setIsClicked] = useState(false);

  // create method to handle cta button click
  let handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <main>
      {isClicked ? (
        <Form
          title={generalInfo.title}
          formControls={generalInfo.getControls()}
        />
      ) : (
        <Hero onClick={handleClick} />
      )}
    </main>
  );
};

export default Main;
