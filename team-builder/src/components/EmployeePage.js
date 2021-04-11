import React from "react";
import Employee from "./Employee";
import { useParams } from "react-router-dom";

const EmployeePage = (props) => {
  let { name } = useParams();
  const { employeeList } = props;

  const employee = employeeList.find((elem) => elem.name === name);

  return (
    <div>
      <header>Individual Employee page</header>
      <Employee employee={employee} />
    </div>
  );
};

export default EmployeePage;
