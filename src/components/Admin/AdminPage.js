import React from "react";

export default function AdminPage() {
  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
}
// import React, { useState, useEffect } from "react";

// import UserService from "../services/user-service";
// import EventBus from "../common/EventBus";

// const AdminPage = () => {
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     UserService.getAdminPage().then(
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
// export default AdminPage;
