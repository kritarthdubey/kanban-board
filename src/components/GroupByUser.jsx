import React from "react";

const GroupByUser = ({ data }) => {
  const categorizeByUser = (tickets, users) => {
    return users.reduce((acc, user) => {
      acc[user.name] = tickets.filter((ticket) => ticket.userId === user.id);
      return acc;
    }, {});
  };

  const categorizedTickets = categorizeByUser(data.tickets, data.users);

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

  return (
    <div className="kanban-board">
      {Object.keys(categorizedTickets).map((userName) => (
        <KanbanColumn
          key={userName}
          title={userName}
          tickets={categorizedTickets[userName]}
          users={data.users}
        />
      ))}
    </div>
  );
};

export default GroupByUser;
