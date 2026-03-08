import React from "react";

const RadioGroup: React.FC = () => {
  return (
    <div className="radio-group">
      <p>Are you an Agency?</p>

      <label>
        <input type="radio" name="agency" defaultChecked />
        Yes
      </label>

      <label>
        <input type="radio" name="agency" />
        No
      </label>
    </div>
  );
};

export default RadioGroup;