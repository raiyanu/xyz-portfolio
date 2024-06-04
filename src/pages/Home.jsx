import React from "react";
import Navbar from "../Components/Navbar";
import MainLayout from "../layouts/MainLayout";
document.getElementsByTagName("title")[0].text = " RayDev | Home ";
function Home() {
  return (
    <>
      <MainLayout>
        <Navbar />
      </MainLayout>
    </>
  );
}

export default Home;
