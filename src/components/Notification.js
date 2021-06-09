import React from "react";

const Notification = ({ color = "is-danger", children }) => {
  return (
    <div className={`notification ${color} is-light has-text-centered`}>
      {children}
    </div>
  );
};

export default Notification;
