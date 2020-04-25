import React from "react";
import styled from 'styled-components'
import { Button } from 'reactstrap'

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2%;
  justify-content: space-between;
`

const StyledCard = styled.div`
  border: 1px solid #eee;
  padding: 2%;
  border-radius: 12px;
  width: 31%;
  margin: 10px;
  text-align: center;
`

const styleButton = {
  width: '100px',
  margin: '6px'
}

const List = (props) => {
  return (
    <StyledList>
      {props.data.map(user => {
        return (
          <StyledCard key={user.id}  >
            <div className="userInfo">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
              <p>Team: {user.teamNumber}</p>
            </div>
            <Button color="info" style={styleButton} id={user.id} onClick={e => props.memberToEdit(e)}>
              Edit
            </Button>
            <Button color="danger" style={styleButton} id={user.id} onClick={e => props.removeMember(e)}>
              Delete
            </Button>
          </StyledCard>
        );
      })}
    </StyledList>
  );
};

export default List;
