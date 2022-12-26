import React, { memo } from "react";

const Movie = memo(({ title, poster }) => {
  console.log("Renderizando Movies");
  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} alt={title} />
    </div>
  );
});

export default Movie;
