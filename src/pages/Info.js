import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Room() {
  let { dormID } = useParams();
  let { roomID } = useParams();
  const [resident, setResident] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/room/${dormID}/${roomID}`)
      .then((response) => {
        // console.log(response.data);
        setResident(response.data);
      });
  }, [dormID, roomID]);

  console.log(resident);

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th></th>
          <th>Tel no.</th>
          <th>Gender</th>
        </tr>
        {resident.map((value, key) => {
          return (
            <tr>
              <td>
                <div className="fname"> {value.FNAME} </div>
              </td>
              <td>
                <div className="lname"> {value.LNAME} </div>
              </td>
              <td>
                <div className="telno"> {value.TELNO} </div>
              </td>
              <td>
                <div className="gender"> {value.GENDER} </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Room;
