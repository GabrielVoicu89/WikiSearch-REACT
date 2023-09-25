import { useEffect, useState } from "react";
import Nav from "../Navigation/Nav";
import List from "./List";

function Wiki() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const clickButton = async () => {
    let answer = await fetch(
      `https://fr.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${input}&format=json`
    );
    console.log("answer", answer);

    let donnes = await answer.json();
    console.log("donnes", donnes);
    setArray(donnes[3]);
  };


  const renderList = () => {
    return array.map((item, index) => {
      return <List key={index} content={item} />;
    });
  };

  return (
    <div>
      <Nav></Nav>
      <h1>Wiki page</h1>
      <input type="text" onChange={handleInput} />
      <button onClick={clickButton}>Search</button>
      <ul>{renderList()}</ul>
    </div>
  );
}
export default Wiki;
