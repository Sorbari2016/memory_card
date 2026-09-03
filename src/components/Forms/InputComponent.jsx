import { createCamelCase } from "../../utilities/utility";

const InputControl = ({ label, type, value, onChange }) => {
  // use camelCase for labels that contain more than one word
  let nameValue = createCamelCase(label);
  return (
    <div className="form-item">
      <label htmlFor={label}>
        <span className="required-indicator">* </span>
        {label}:
        <input
          type={type}
          id={label}
          name={nameValue}
          value={value}
          onChange={onChange}
          required
        />
        <span className="valid-indicator"></span>
      </label>
      <small className="error-message"></small>
    </div>
  );
};

export default InputControl;
