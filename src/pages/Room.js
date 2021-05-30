import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import dormallroom from "./dormallroom";
//const axios = require('axios').default;


export default function Room() {

  const [room, getAllRoom] = useState([]);

const url = 'http://localhost:3001/room';
 
useEffect(() => {
  getRoomAll();
 }, []);

const getRoomAll =  () => {
    axios.get(`${url}past`).then((response) => {
      const allroom = response.data.room.allroom;
      getAllRoom(allroom);
    })
 .catch(error => console.error(`ERROR: ${error}`));
  }
  return(
   <dormallroom room={room}/>
  )

}

// export default function Roominfo(props) {
//   const displayroom = (props) => {
//     const {roomno,room} = props;

//     if(room.length > 0){
//       return(
//         room.map((rooms, index) => {
//           console.log(rooms);
//           return(
//             <div className='rooms' key={rooms.ROOMNO}>
//                <h5 className='status'>{rooms.STATUS}</h5>
//             </div>
//           )
//         }
//       ))
//     }else{
//       return ( <h5>no room yet</h5>)
//     }
//   }
//   return(
//     <>
//     {displayroom(props)}
//     </>
//   )
// }
//  function Room() {

//   const [room, Room] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3001/room").then((response) => {
//       Room(response.data);
//     });
//   }, []);
//   return (
//     <div className="Room"> {room.map((value, key) => {
//        return <div> {value.ROOMNO} </div>;
//     })} 
//     </div>
// );
//   }
//   export default Room;