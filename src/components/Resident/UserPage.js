import React from "react";

export default function UserPage() {
  return (
    <div>
      <h1>Resident</h1>
    </div>
  );
}
// import React, { useState, useEffect } from "react";

// import UserService from "../services/user-service";
// import EventBus from "../common/EventBus";

// const UserPage = () => {
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     UserService.getUserPage().then(
//       (response) => {
//         setContent(response.data);
//       },
//       (error) => {
//         const _content =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         setContent(_content);
//       }
//     );
//   }, []);

//   return (
//     <div className="container">
//       <header className="jumbotron">
//         <h3>{content}</h3>
//       </header>
//     </div>
//   );
// };
// export default UserPage;
