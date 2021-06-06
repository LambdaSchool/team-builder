import React, { useState } from 'react'
import './App.css';
import TeamForm from './components/Form'
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;
const initialTeamValues = {
 
  name: '',
  email: '',
  role: '',
}

function Member({details}) {
  if (!details) {
    return <h3>Working fetching your team Members&apos;s details...</h3>
  }


  return (
    <div className='member container'>
      <h2>{details.name}</h2> 
      <p> Email: {details.email}</p> 
      <p>Role: {details.role}</p>
    </div>
  )
}

  
  
  
   function App() {
  
  
    const [members, setMembers] = useState([]);
    const [formValues, setFormValues] = useState(initialTeamValues);
  
  
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
        role: formValues.role,
      };
      setMembers(members.concat(newMember));
      setFormValues(initialTeamValues);
    }
  
  
    return (
      <div className="App">
  
        <Title>Team Form App</Title>
          <TeamForm
         values={formValues} 
          update={updateForm}
          submit={submitForm}
        />
        {members.map((member) => {
          return <Member key={member.id} details={member} />
        })}
      </div>
    );
  }
  
  export default App;