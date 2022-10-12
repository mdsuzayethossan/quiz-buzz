import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
export const TopicsDataContext = createContext({});
const Main = () => {
  const topicsData = useLoaderData();
  return (
    <TopicsDataContext.Provider value={topicsData}>
      <main>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </main>
    </TopicsDataContext.Provider>
  );
};

export default Main;
