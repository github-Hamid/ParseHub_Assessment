import React, { useState } from "react";
import "./App.css";
import Breadcrumb from "./components/Breadcrumb";

function App() {
  const [crumbs, setCrumbs] = useState(["Home", "Category", "Sub Category"]);

  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <div className="App container">
      <Breadcrumb crumbs={crumbs} selected={selected} />
    </div>
  );
}

export default App;
