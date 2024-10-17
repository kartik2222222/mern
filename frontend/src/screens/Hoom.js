import React, { useEffect, useState } from "react";
import axios from "axios";

function Hoom() {
  const [rooms, setrooms] = useState([]);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchRooms = async () => {
      try {
        const data = (await axios.get("/api/rooms/getrooms")).data;
        console.log(data)
        setrooms(data.room);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRooms();
  }, []);
  console.log(rooms);
  return (
    <div>
      <h1>hoom screen</h1>
      <h1> length of rooms is {rooms.length}</h1>
      <h2>Rooms Count: {rooms.name}</h2>
      {rooms.length > 0 ? (
        <ul>
          
          {rooms.map(( house ,  index ) => (
            <li key={index}>{house.name? (house.name): ("no name")}</li>
          ))}
          
        </ul>
      ) : (
        <p>rooms are not availabe</p>
      )}
    </div>
  );
}

export default Hoom;
