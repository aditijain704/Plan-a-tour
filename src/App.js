import React from "react";
import data from "./data";
import Tours from "./Components/Tours";
import { useState } from "react";

const App = () => {
  const[tours,setTour] = useState(data);
  console.log(data);
  function removeTour(id){
        const newTour = tours.filter(tour=> tour.id!=id);
        setTour(newTour);
  }
  function resetTour(){
    setTour(data);
  }
  if(tours.length===0){
    return(
    <div className="refresh">
      <h2>No tours available</h2>
      <button onClick={resetTour} className="btn-white">Refresh</button>
    </div>
    )
  }
  
  return (
    
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}> </Tours>
    </div>
  );
  
};

export default App;
