import React from "react";

const Search = (props) => {
  // let

  let style = {
    paddingLeft: "60px",
    backgroundImage: "url('./icon-seach.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px",
    width: "440px",
    height: "44px",
    borderColor: "#cfcfcf",
    borderRadius: "5px",
    backgroundPositionX: "20px",
    backgroundPositionY: "12px",
  };
  return (
    <div>
      <input placeholder={props.placeHolder} style={style} />
    </div>
  );
};

export default Search;
