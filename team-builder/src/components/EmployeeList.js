import React from "react";
import Employee from "./Employee";
import { Link } from "react-router-dom";

const EmployeeList = (props) => {
  const { employeeList, handleEditor } = props;

  return (
    <div class="  w-5/6">
      <h4 class="text-2xl mt-8"> Current Employees</h4>
      <div class="flex flex-wrap 	 w-full">
        {employeeList.map((employee) => {
          return (
            <div class="m-8 w-1/3 text-sm border-2 border-gray-400 rounded-lg">
              <EmployeeDetails key={employee.id} employee={employee} />
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full text-xs"
                key={employee.email}
                onClick={() => handleEditor(employee)}
              >
                Edit
              </button>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function EmployeeDetails(props) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300 p-6">
      <Link to={`/employees/${props.employee.name}`}>
        <Employee employee={props.employee} key={props.employee.name} />
      </Link>
    </div>
  );
}

export default EmployeeList;
