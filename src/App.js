//REACT
import React, { useState } from "react";

//components import
import Header from "./features/headerfooter/Header";
import Cards from "./features/cards"
import Footer from "./features/headerfooter/Footer";
import EntryForm from "./features/form";

//Bootstrap components import
import 'bootstrap/dist/css/bootstrap.min.css';

//STYLES
import './App.css';


//Main App
function App() {

  return (
    <div className="App" id='app_id' >
      <Header />

      <Cards />
      <EntryForm />
      
      <Footer />
    </div>
  );
}

export default App;