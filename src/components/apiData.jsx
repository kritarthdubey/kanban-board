// import React, { useState, useEffect } from 'react';
// import GroupByStatus from './GroupByStatus';
// import GroupByUser from './GroupByUser';
// import GroupByPriority from './GroupByPriority';

// function ApiData() {
//   const [data, setData] = useState({ tickets: [], users: [] });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://api.quicksell.co/v1/internal/frontend-assignment') // Replace with your API endpoint
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error('Network response was not ok.');
//       })
//       .then((data) => setData(data))
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, []); // The empty array ensures this effect runs once on mount

//   if (loading) return 'Loading...';
//   if (error) return 'Error!';

// const Card = ({ ticket, users }) => {
//   const user = users.find(u => u.id === ticket.userId);
//   return (
//     <div style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '10px', margin: '10px', maxWidth: '300px' }}>
//       <h3>{ticket.title}</h3>
//       <button type="button">{ticket.tag}</button>
//       {/* {user && <div>{user.name}</div>}
//       Include user image if available */}
//     </div>
//   );
// };

// // CardList Component
// const CardList = ({ tickets, users }) => {
//   return (
//     <div>
//       {tickets.map(ticket => (
//         <Card key={ticket.id} ticket={ticket} users={users} />
//       ))}
//     </div>
//   );
// };

//   return (
//     <div>
//       <GroupByStatus data={data} />
//       <GroupByUser data={data} />
//       <GroupByPriority data={data} />
//     </div>
//   );
// }

// export default ApiData;

// ApiData.jsx
import React, { useEffect, useState } from "react";
import DisplayButton from "./DisplayButton";
import GroupByPriority from "./GroupByPriority";
import GroupByStatus from "./GroupByStatus";
import GroupByUser from "./GroupByUser";

function ApiData() {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [grouping, setGrouping] = useState("Status"); // Default grouping
  const handleSetGrouping = (newGrouping) => {
    console.log("Changing grouping to:", newGrouping); // This should log the new grouping value
    setGrouping(newGrouping);
  };

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  let GroupingComponent;
  switch (grouping) {
    case "User":
      GroupingComponent = <GroupByUser data={data} />;
      break;
    case "Priority":
      GroupingComponent = <GroupByPriority data={data} />;
      break;
    default:
      GroupingComponent = <GroupByStatus data={data} />;
  }

  return (
    <div>
      <DisplayButton setGrouping={handleSetGrouping} />
      {GroupingComponent}
    </div>
  );
}

export default ApiData;
