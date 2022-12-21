import React, { useState } from "react";

const EffectOnLoad = ({ name }) => {
  const [nameState, setNameState] = useState(name);

  return (
    <div>
      <h4>{name}</h4>

      <input
        type="text"
        value={nameState}
        onChange={(e) => setNameState(e.target.value)}
      />
    </div>
  );
};

export default EffectOnLoad;
