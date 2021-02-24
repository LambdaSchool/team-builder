import React, { useState } from "react";
import "./App.css";
import Member from "./Member";
import Data from "./Data";
import Form from "./Form";

const initValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [memberList, setMemberList] = useState(Data);
  const [formValues, setFormValues] = useState(initValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };
    if (!newMember.name || !newMember.email || !newMember.role) {
      return;
    } else {
      console.log(newMember);
      setMemberList([...memberList, newMember]);
      setFormValues(initValues);
    }
  };

  return (
    <div className="App">
      <Form submit={submitForm} change={updateForm} values={formValues} />
      <div className="memberListContainer">
        {memberList.map((member, i) => {
          return <Member member={member} key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
