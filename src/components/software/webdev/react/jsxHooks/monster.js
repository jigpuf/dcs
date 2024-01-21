import React, { useState, useEffect } from "react";
const Monster = () => {
  const [data, setData] = useState(null);
  const [monster, setMonster] = useState(0);
  const [currentMonster, setCurrentMonster] = useState(0);

  ////API for getting monster list
  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (data) {
      fetch(
        `https://www.dnd5eapi.co/api/monsters/${data.results[monster].index}`
      )
        .then((response) => response.json())
        .then((json) => setCurrentMonster(json))
        .catch((error) => console.error(error));
    }
  }, [data, monster]);

  //Create Random Number in a range
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  ///Handle random Monster button click to set new Monsters
  const newMonster = () => {
    setMonster(randomNumberInRange(0, data.count - 1));
  };
  return (
    <div>
      <h1>Monsters</h1>
      <button onClick={newMonster}>Monster</button>
      <table>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Picture</th>
          <th>Size</th>
          <th>Alignment</th>
        </tr>
        <tr>
          {data ? <td>{monster}</td> : "Loading..."}
          {data ? <td>{data.results[monster].name}</td> : "Loading..."}
          {data ? (
            <td>
              <img
                style={{ width: "300px" }}
                src={`https://www.dnd5eapi.co/api/images/monsters/${data.results[monster].index}.png`}
              ></img>
            </td>
          ) : (
            "Loading..."
          )}
          <td>{currentMonster.size}</td>
          <td>{currentMonster.alignment}</td>
        </tr>
        <tr>
          <th>Armor Class</th>
          <th>Hit Points</th>
          <th>Hit Dice</th>
          <th>Hit Points Role</th>
        </tr>
        <tr>
          <td>{`${currentMonster.armor_class[0].type}:${currentMonster.armor_class[0].value}`}</td>
          <td>{currentMonster.hit_points}</td>
          <td>{currentMonster.hit_dice}</td>
          <td>{currentMonster.hit_points_roll}</td>
        </tr>
        <tr>
          <th>Speed</th>
          <th>Strength</th>
          <th>Dexterity</th>
          <th>Constitution</th>
          <th>Intelligence</th>
          <th>Wisdom</th>
          <th>Charisma</th>
        </tr>
      </table>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
};

export default Monster;
