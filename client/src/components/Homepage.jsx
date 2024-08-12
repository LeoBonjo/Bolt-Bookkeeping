import ProductionGrid from "./ProductionGrid";
import AddProduction from "./AddProduction";
import GlobalNavbar from "./GlobalNavbar";
import Hero from "./Hero";
import { useState, useEffect } from "react";

const Homepage = () => {
  // Create links obj to pass to Global Navbar
  const links = [
    { id: 1, label: "Add Production", path: "#add-production" },
    { id: 2, label: "Productions", path: "#production-grid" },
  ];

  const [productions, setProductions] = useState([]);
  // Productions is the array fetched from the db which will replace []
  /// Every 500 means a server side error - first check the terminal running the backend
  // Broken??? "res is not defined", "status is not defined"
  const getProductions = () => {
    fetch("/api/productions")
      .then((res) => res.json()) // Wait to see if the server can satisfy request
      .then((json) => {
        // The data has arrived from the server; now, update productions
        setProductions(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductions();
  }, []);

  return (
    <div id="homepage" className="container-fluid">
      <GlobalNavbar links={links} />
      <Hero />
      <ProductionGrid productions={productions} />
      <AddProduction getProductions={getProductions} />
    </div>
  );
};
export default Homepage;