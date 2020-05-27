import React from "react";
import "./styles.css";
function MovieItem() {
  return (
    <div>
      <p>Title</p>
      <p>8.0</p>
      <p>Test</p>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <MovieItem />
    </div>
  );
}
