import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Landing from "../../Components/Home/Landing/Landing";
import Footer from "../../Components/Shared/Footer/Footer";
import Services from "../../Components/Home/Services/Services";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Landing />
      <Services />
      <Footer />
    </main>
  );
};

export default Home;
