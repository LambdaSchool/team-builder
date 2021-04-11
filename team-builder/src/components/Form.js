import React from "react";
import { useState, useEffect } from "react";

const Form = (props) => {
  const { empToEdit, handleEdit, handleAdd, setEmpToEdit } = props;
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    role: "",
    id: Date.now(),
  });

  const changeHandler = (evt) => {
    setEmployee({
      ...employee,
      [evt.target.name]: evt.target.value,
    });
  };

  useEffect(() => {
    if (empToEdit) {
      setEmployee(empToEdit);
    }
  }, [empToEdit]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (empToEdit) {
      handleEdit(employee);
      setEmpToEdit(null);
      setEmployee({
        name: "",
        email: "",
        role: "",
      });
      console.log("editor");
    } else {
      console.log("adder");
      handleAdd(employee);
      setEmployee({
        name: "",
        email: "",
        role: "",
      });
    }
  };

  return (
    <div class="flex ">
      <form class="m-4" onSubmit={handleSubmit}>
        {empToEdit ? (
          <p class="m-8 underline font-bold text-red-500 text-xl">
            {" "}
            {`Editing: ${empToEdit.name}`}
          </p>
        ) : (
          <p class="m-8 underline">
            {" "}
            {`Adding new employee: ${employee.name}`}
          </p>
        )}

        <label class="m-4 text-xl">
          Name:
          {empToEdit ? (
            <input
              class="border-2 border-black rounded-xl ml-4"
              type="text"
              name="name"
              onChange={changeHandler}
              value={employee.name}
            />
          ) : (
            <input
              class="border-2 rounded-xl ml-4"
              type="text"
              name="name"
              onChange={changeHandler}
              value={employee.name}
            />
          )}
        </label>
        <label>
          Email:
          <input
            class="border-2 rounded-xl ml-4"
            type="text"
            name="email"
            onChange={changeHandler}
            value={employee.email}
          />
        </label>
        <label class="ml-8">
          Role:
          <input
            class="border-2 rounded-xl ml-4"
            type="text"
            name="role"
            onChange={changeHandler}
            value={employee.role}
          />
        </label>
        <input
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-16"
          type="submit"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
