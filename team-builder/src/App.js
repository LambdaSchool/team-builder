import "./App.css";
import Form from "./components/Form";
import EmployeePage from "./components/EmployeePage";
import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import { Route } from "react-router-dom";

function App() {
  const [empToEdit, setEmpToEdit] = useState(null);
  const [employeeList, setEmployeeList] = useState([
    {
      name: "Johnny Boy",
      email: "jboy@gmail.com",
      role: "CEO",
      id: 0,
    },
    {
      name: "Tommy Smith",
      email: "Tboy@hotmail.com",
      role: "Janitor",
      id: 1,
    },
    {
      name: "Jim Bone",
      email: "Jtreezy@napster.com",
      role: "manager",
      id: 1,
    },
  ]);

  const handleAdd = (employee) => {
    if (employee.name) {
      setEmployeeList([...employeeList, employee]);
    }
  };

  const handleEdit = (employee) => {
    setEmployeeList(
      employeeList.map((elem) => {
        if (elem.name === empToEdit.name) {
          return employee;
        } else {
          return elem;
        }
      })
    );
  };

  const handleEditor = (employee) => {
    setEmpToEdit(employee);
  };

  return (
    <div class="flex flex-col justify-around items-center h-screen bg-gray-100">
      <Route exact path="/">
        <h1 class="text-2xl m-8 font-bold">
          {" "}
          Important Company Employee Database
        </h1>
        <Form
          class="m-8"
          handleAdd={handleAdd}
          empToEdit={empToEdit}
          handleEdit={handleEdit}
          setEmpToEdit={setEmpToEdit}
        />
        <EmployeeList employeeList={employeeList} handleEditor={handleEditor} />
      </Route>
      <Route path="/employees/:name">
        <EmployeePage employeeList={employeeList} />
      </Route>
    </div>
  );
}

export default App;
