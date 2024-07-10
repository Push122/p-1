import React from "react";

const App = () => {
  let a = 0;

  const handlea = () => {
    a = a + 1;
    console.log(a);
  };

  return (
    <>
      <p onClick={handlea}>click me to increse a</p>
    </>
  );
};

export default App;
