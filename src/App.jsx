import React from "react";
import { RouterProvider } from "react-router-dom";
import Titles from "./Components/Title/Titles";
import Route from "./Routes/Route";

function App() {
  return (
    <>
      <Titles /> 
      <RouterProvider router={Route} />
    </>
  );
}

export default App;
