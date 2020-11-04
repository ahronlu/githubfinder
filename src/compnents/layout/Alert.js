import React from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const { msg, type } = useSelector((state) => state.alert);
  return msg ? (
    <div className={`alert alert-${type}`}>
      <i className="fas fa-info-circle" />
      {msg}
    </div>
  ) : null;
};

export default Alert;
