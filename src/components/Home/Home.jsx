import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Topics from "../Topics/Topics";
export const TopicsDataContext = createContext({});
const Home = () => {
  const topicsData = useLoaderData();
  return (
    <TopicsDataContext.Provider value={topicsData}>
      <main>
        <Banner></Banner>
        <Topics></Topics>
      </main>
    </TopicsDataContext.Provider>
  );
};

export default Home;
