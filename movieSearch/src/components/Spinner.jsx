import React from "react";

const Spinner = () => {

  return (
    <div class="spinner-border" role="status" style={{width: 500, backgroundColor: "white"}}>
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
