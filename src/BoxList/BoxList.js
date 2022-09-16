import React, { useState } from "react";
import NewBoxForm from "../NewBoxForm/NewBoxForm";
import Box from "../Box/Box";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes((boxList) => [...boxList, { ...newBox }]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <h1>BoxList</h1>

      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map((box) => (
          <Box
            id={box.id}
            backgroundColor={box.backgroundColor}
            width={box.width}
            height={box.height}
            handleRemove={removeBox}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
