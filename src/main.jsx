import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Comp1 from "./ClassComp/Comp1";
import Comp2 from "./ClassComp/Comp2";
import Comp3 from "./ClassComp/Comp3";
import Comp4 from "./ClassComp/Comp4";
import FuncComp4 from "./FuncComp/FuncComp4";
import FuncComp5 from "./FuncComp/FuncComp5";
import FuncComp6 from "./FuncComp/FuncComp6";
import Home from "./Routing/Navbar";
import AppRoute from "./AppRoute";
import CompCallback from "./useCallback/CompCallback";
import FetchAPIApp from "./FetchAPIApp";
import RefExample from "./useRefExample/RefExample";
import MyApp from "./PracticalTwo/MyApp";
import EventBinding from "./ClassComp/EventBinding";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Comp1 name="harsh" /> */}
    {/* <Comp2 college="LJ" /> */}
    {/* <Comp3 name="Harsh" /> */}
    {/* <Comp4 /> */}
    {/* <FuncComp4 /> */}
    {/* <FuncComp5 /> */}
    {/* <FuncComp6 /> */}
    {/* <Home /> */}
    {/* <AppRoute /> */}
    {/* <CompCallback /> */}
    {/* <FetchAPIApp /> */}
    {/* <RefExample /> */}
    {/* <MyApp /> */}
    <EventBinding />
  </React.StrictMode>
);
