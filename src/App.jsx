import Header from "./components/Header";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/rightColumn";
import React from "react";

function App() {
  return ( 
    <div className="bg-gray-100 min-h-50 flex justify-center items-start py-1">
      <div className="w-[800px] bg-white shadow-lg">
        <Header />
        <div className="grid md:grid-cols-3">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </div>
  );
}


export default App;
