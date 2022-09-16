import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    backgroundColor: "#000000",
    width: "16",
    height: "16",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuidv4() });
    setFormData(INITIAL_STATE);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="color"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="range"
        min="5"
        max="30"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="range"
        min="5"
        max="30"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <button>Add New Box</button>
    </form>
  );
};

export default NewBoxForm;
