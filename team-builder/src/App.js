import React, { useState } from 'react'
import './App.css';
import Form from './Form'

function App() {

  const initialFormValues = {
    username: '',
    email: '',
    role: '',
  }
  const [members, setMember] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    console.log(inputName, inputValue)
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
  }

    if(!newMember.username || !newMember.email || !newMember.role) return

    
    setMember([newMember, ...members])
    setFormValues(initialFormValues)

    console.log(members)
  }
     

  return (
    <div className='container'>
      <h1>Form App</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
