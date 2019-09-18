import React from "react";

const FormCard = props => {
    console.log(props);
    return (
        <>
            {props.members.map(member => (
                <div className="member" key ={member.id}>
                    <h2>Name: {member.name}</h2>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                    <button>Edit</button>
                </div>
            ))}
        </>
    )
}

export default FormCard;