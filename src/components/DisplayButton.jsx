import { faAngleDown, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const DisplayButton2 = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [grouping, setGrouping] = React.useState("");
  console.log("grouping", grouping);
  // const [isOpen, setIsOpen] = React.useState(false);
  const toggleSelect = () => setIsOpen((prev) => !prev);

 
  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        border: "1px solid red",
        gap: "10px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start"
        }}
      >
        <button className="display-button" onClick={toggleSelect}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              paddingInline: "10px"
            }}
          >
            <FontAwesomeIcon icon={faSlidersH} />
            <span>Display</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </button>
      </div>

      <div
        style={{
          height: isOpen ? "200px" : 0,
          width: "400px",
          border: isOpen && "1px solid #5a5853",
          backgroundColor: "#e1e0df",
          borderRadius: "10px",
          transition: "all 0.2s ease-in-out"
        }}
      >
        {isOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "20px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px"
              }}
            >
              <div>Grouping</div>
              <select
                onChange={(e) => setGrouping(e.target.value)}
                value={grouping}
              >
                <option value="" disabled>
                  select from given values
                </option>
                <option value="byStatus">by status</option>
                <option value="byUser">by user</option>
                <option value="byPriority">by priority</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DropdownButton = ({ label, options, onOptionSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
     
      test
    </div>
  );
};

const DisplayButton = ({ setGrouping }) => {
  return (
    <div className="display-button-container">
      <button className="display-button">
        <FontAwesomeIcon icon={faSlidersH} />
        <span>Display</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <select>
        <option value="">
          <FontAwesomeIcon icon={faSlidersH} />
          <span>Display</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </option>
      </select>
      <div className="dropdowns-container">
        <DropdownButton
          label="Grouping"
          options={["Status", "User", "Priority"]}
          onOptionSelected={setGrouping}
        />
      </div>
    </div>
  );
};

export default DisplayButton2;
