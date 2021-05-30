import React from 'react';
export default function dormallroom(props) {
    const displayroom = (props) => {
      const {room} = props;
  
      if(room.length > 0){
        return(
          room.map((rooms, index) => {
            console.log(rooms);
            return(
              <div className='rooms' key={rooms.ROOMID}>
                 <h5 className='status'>{rooms.STATUS}</h5>
              </div>
            )
          }
        ))
      }else{
        return ( <h5>no room yet</h5>)
      }
    }
    return(
      <>
      {displayroom(props)}
      </>
    )
  }