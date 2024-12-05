import React from "react";

const Select = ({ name, options, style }) => {
  const styleRaw = {
    paddingLeft: "20px",

    width: "149px",
    height: "48px",
    borderColor: "#cfcfcf",
    borderRadius: "5px",
    ...style,
  };
  return (
    <div>
      <select style={styleRaw}>
        <option>{name}</option>
        {options.map((option, index) => (
          <option key={option.index}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
