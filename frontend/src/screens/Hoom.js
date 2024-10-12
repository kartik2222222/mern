import React ,{useEffect,useState} from 'react'
import axios from "axios";


function Hoom() {

const [rooms ,setrooms] = useState([])

    useEffect(() => {
        // Define an async function inside useEffect
        const fetchRooms = async () => {
            try {
                const data = (await axios.get('/api/rooms/getrooms')).data;
                setrooms(data.room)
        
               
            } catch (error) {
                console.log(error);
            }
        };

        fetchRooms();

    },[])
    console.log(rooms)
  return (
    <div>
      <h1>hoom screen</h1>
      <h1> length of rooms is {rooms.length}</h1>
      <h2>Rooms Count: {rooms.name}</h2>
    </div>
  )
}

export default Hoom
