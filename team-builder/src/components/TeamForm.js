import React, { useState } from 'react';
import TeamList from './TeamList.js';

function TeamForm(props) {
  const [name, setName] = useState();
  const [profession, setProfession] = useState()
  const { teamMembers } = props;


  const [list, setList] = useState(teamMembers);





  return (
    <div>
      <form>

        <h1>The you're adding to the list is <span defaultValue='not known'>{name}</span></h1>

        New Member Name: <input
          onChange={event => {
            setName(event.target.value);
          }}

          id='name'
          type='text'
          placeholder='New Team Member Name'
        />

        Profession: <input
          onChange={event => {
            setProfession(event.target.value);
          }}

          id='profession'
          type='text'
          placeholder='Profession'
        />

        <input
          onClick={event => {
            event.preventDefault();
            document.querySelector('#name').value = '';
            document.querySelector('#profession').value = '';
            setList([...list, { name, profession }]);
            list.push({ name, profession });
          }}
          id='submit'
          type='submit'
          value='Add New Member'
        />

      </form>
      <TeamList teamMembers={list} />
    </div>
  );
};

export default TeamForm;
