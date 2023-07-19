import HomePage from "./Components/HomePage";
import "./Components/style.css";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./Components/DetailsPage";
import { useState } from "react";

const App = () => {
  const [id, setId] = useState("");

  return (
    <div id="app">
   
      <Routes>
        <Route path="/" element={<HomePage ID={{ setId: setId }} />} />
        <Route path={`/item/:${id}`} element={<DetailsPage />} />
      </Routes>
    </div>
  );
};
export default App;
