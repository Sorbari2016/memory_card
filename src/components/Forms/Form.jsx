import InputControl from "./InputComponent";
import SaveButton from "./SaveButton";
import GoBackButton from "./GoBackButton";
import { useState } from "react";
import { createCamelCase } from "../../utilities/utility";

const Form = ({ title, formControls }) => {
  // manage input state here
  const [inputVal, setInputVal] = useState(
    formControls.reduce((accumulator, controller) => {
      accumulator[createCamelCase(controller.label)] = "";
      return accumulator;
    }, {}),
  );

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputVal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form submission
  const handleSubmit = (e) => {};

  return (
    <form action="/cvs" className="cv-form" noValidate>
      <h2 className="form-title">{title}</h2>
      {formControls.map((control, index) => (
        <InputControl
          key={index}
          label={control.label}
          type={control.type}
          value={inputVal[createCamelCase(control.label)]}
          onChange={handleChange}
        />
      ))}
      <span className="form-action">
        <GoBackButton />
        <SaveButton />
      </span>
    </form>
  );
};

export default Form;
