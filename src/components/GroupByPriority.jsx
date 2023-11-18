import React from "react";

const GroupByPriority = ({ data }) => {
  const categorizeByPriority = (tickets) => {
    const priorityLevels = ["High", "Medium", "Low", "Unknown"]; // Define priority levels as needed
    return priorityLevels.reduce((acc, level) => {
      acc[level] = tickets.filter((ticket) => ticket.priority === level);
      return acc;
    }, {});
  };

  const categorizedTickets = categorizeByPriority(data.tickets);

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
      {Object.keys(categorizedTickets).map((priority) => (
        <KanbanColumn
          key={priority}
          title={priority}
          tickets={categorizedTickets[priority]}
          users={data.users}
        />
      ))}
    </div>
  );
};

export default GroupByPriority;
