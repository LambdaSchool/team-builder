import React, { useState } from "react";
import "./App.css";
import TeamMemberList from "./views/TeamMemberList";
import Form from "./components/Form"

function App() {
  const [members, setMembers] = useState([
    { name: "Jeff", age: "26", occupation: "Chef", favFood: "Pasta" },
    { name: "April", age: "20", occupation: "Jr Developer", favFood: "BBQ" },
    {
      name: "Devin",
      age: "43",
      occupation: "Marketing Director",
      favFood: "Prime Rib"
    },
    {
      name: "Maddie",
      age: "31",
      occupation: "Self - Employed",
      favFood: "Asparagus"
    }
  ]);
  const [edit, setEdit] = useState(false)

  const addMember = (e) => {
    setMembers([...members, e])
  }
  const editMember = name => {
    setEdit(true)
    const member = members.find(mem => mem.name === name)
    console.log("edit", member)
    return member;
  }
  return (
    <div className="App">
      <TeamMemberList members={members} editMember={editMember}/>
      <Form addMember={addMember} edit={edit}/>
    </div>
  );
}

export default App;
