import React, { useState } from "react";
export default function Form(props) {
    const [member, updateMember]=useState({
        name: "",
        email: "",
        role: "UX Designer"
    });
   function handleChange(event){
       updateMember({...member, [event.target.name]:event.target.value});
   }

    return (
        <div className="form">
            <label htmlFor="add-team-member">Add a team member:</label>
            <form id="add-team-member">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter name" value={member.name} onChange={handleChange}></input>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter email" value={member.email} onChange={handleChange}></input>
                <label htmlFor="role">Role:</label>
                <select id="role" name="role" value={member.role} onChange={handleChange}>
                    <option value="UX Designer">UX Designer</option>
                    <option value="UI Developer">UI Developer</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Data Scientist">Data Scientist</option>
                </select>
                <input type="submit"></input>
            </form>
        </div>
    );
}