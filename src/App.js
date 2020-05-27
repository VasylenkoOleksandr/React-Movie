import React from "react";
import "./styles.css";
function MovieItem(props) {
  return (
    <div>
      <p>Title</p>
      <p>8.0</p>
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
