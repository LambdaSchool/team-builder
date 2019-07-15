import React, {useState} from 'react';
import {Button,Card,Form,Segment,Grid,Divider} from 'semantic-ui-react';
import TeamCard from './TeamCard';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [team, setTeam] = useState([{id:1,email:'steve@dave.com',name:'Steve',role:'Front End Developer'}]);
  const [newMem, setNewMem] = useState({email:'',name:'',role:''});
  const [editNum, setEditNum] = useState(0);
  
  return (
    <div className="App">
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable centered>
            <Grid.Column>
              <Form onSubmit={(e) => addNewMember(e)}>
                <Form.Input
                  label='Name'
                  name='name'
                  value={newMem.name}
                  onChange={(e) => changeHandler(e)}
                />
                <Form.Input
                  label='Email'
                  name='email'
                  value={newMem.email}
                  onChange={(e) => changeHandler(e)}
                />
                <Form.Input
                  label='Role'
                  name='role'
                  value={newMem.role}
                  onChange={(e) => changeHandler(e)}
                />
                <Button type='submit'>Add New Member</Button>
              </Form>
            </Grid.Column>

            <Grid.Column textAlign='justified' verticalAlign='middle'>
              <Card.Group>
                {team.map(mem => <TeamCard {...mem} editNum={editNum} toggleEdit={toggleEdit}/>)}
              </Card.Group>
            </Grid.Column>
          </Grid>

          <Divider vertical hidden/>
        </Segment>
    </div>
  );

  function changeHandler(e) {
    setNewMem({...newMem, [e.target.name]:e.target.value});
  }
  function addNewMember(e) {
    e.preventDefault();
    setTeam([...team, {...newMem, id:team.length+1}]);
    setNewMem({email:'',name:'',role:''})
  }
  function toggleEdit(id) {
    editNum === id ? setEditNum() : setEditNum(id);
  }
}

export default App;
