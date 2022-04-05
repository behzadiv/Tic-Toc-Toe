import "../App.css";
import { useState } from "react";

const Toictoctoe = () => {

  const [player, setPlayer] = useState("x");

  const [selectedPlayerX, setSelectedPlayerX] = useState([]);
  const [selectedPlayerY, setSelectedPlayerY] = useState([]);
  
  //select number of box and push it in arrayX or arrayY
  const selectedByPlayers = (e) => {
    let selectedId = parseInt(e.target.id);
    let selectedBox =document.getElementById(selectedId)
    if (player === "x" && selectedBox.innerHTML==="") {
      setPlayer("y");
      selectedPlayerX.push(selectedId);
      selectedBox.innerHTML= "*";
    } else if(player === "y" && selectedBox.innerHTML===""){
      setPlayer("x");
      selectedPlayerY.push(selectedId);
      selectedBox.innerHTML= "+";
    }
  };
  return (
    <div className="App">
      <section className="container" onClick={(e) => selectedByPlayers(e)}>
        <div className="section" id="1"></div>
        <div className="section" id="2"></div>
        <div className="section" id="3"></div>
        <div className="section" id="4"></div>
        <div className="section" id="5"></div>
        <div className="section" id="6"></div>
        <div className="section" id="7"></div>
        <div className="section" id="8"></div>
        <div className="section" id="9"></div>
      </section>
    </div>
  );
};

export default Toictoctoe;
