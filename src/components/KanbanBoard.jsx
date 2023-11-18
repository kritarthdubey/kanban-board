import React, { useEffect, useState } from "react";

function KanbanBoard() {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const categorizeTickets = (tickets) => {
    return tickets.reduce(
      (acc, ticket) => {
        const status = ticket.status || "Todo";
        if (!acc[status]) {
          acc[status] = [];
        }
        acc[status].push(ticket);
        return acc;
      },
      {
        Backlog: [],
        Todo: [],
        InProgress: [],
        Done: [],
        Canceled: [] // Adding Backlog since it's in the data
      }
    );
  };

  // Categorized tickets
  const categorizedTickets = categorizeTickets(data.tickets);

  return (
    <div className="kanban-board">
      <KanbanColumn
        title="Backlog"
        tickets={categorizedTickets["Backlog"]}
        users={data.users}
      />
      <KanbanColumn
        title="Todo"
        tickets={categorizedTickets["Todo"]}
        users={data.users}
      />
      <KanbanColumn
        title="In Progress"
        tickets={categorizedTickets["In progress"]}
        users={data.users}
      />
      <KanbanColumn
        title="Done"
        tickets={categorizedTickets["Done"]}
        users={data.users}
      />
      <KanbanColumn
        title="Canceled"
        tickets={categorizedTickets["Canceled"]}
        users={data.users}
      />
    </div>
  );
}

const KanbanColumn = ({ title, tickets, users }) => {
  return (
    <div className="kanban-column">
      <h2>
        {title} ({tickets.length})
      </h2>
      {tickets.map((ticket) => (
        <KanbanCard key={ticket.id} ticket={ticket} users={users} />
      ))}
    </div>
  );
};

const KanbanCard = ({ ticket, users }) => {
  const user = users.find((u) => u.id === ticket.userId);
  return (
    <div className="kanban-card">
      <h2 className="card-id">{ticket.id}</h2>
      <h3 className="card-title">{ticket.title}</h3>
      <button type="button" className="tag-button">
        {ticket.tag}
      </button>
      {/* {user && <div>{user.name}</div>} */}
      {/* Add user image if available */}
    </div>
  );
};

export default KanbanBoard;
