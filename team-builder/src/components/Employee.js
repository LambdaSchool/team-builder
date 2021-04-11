import React from "react";

const Employee = (props) => {
  const { employee } = props;

  return (
    <div>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Role: {employee.role}</p>
    </div>
  );
};

export default Employee;
