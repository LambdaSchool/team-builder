import React from "react";

export default function Member(props) {
  const { member, id } = props;
  return (
    <div key={id} className="member">
      <h3 className="memberName">{member.name}</h3>
      <p className="memberEmail">Email: {member.email}</p>
      <p className="memberProfession">Profession: {member.role}</p>
    </div>
  );
}
