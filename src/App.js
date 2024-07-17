import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100  flex flex-col min-h-screen">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
