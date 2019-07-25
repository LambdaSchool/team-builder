import React, { useState } from 'react';



const Form = (props) => {
    const initialState = {id: null, name: '', email: '', role: ''}
    const [member, setMember] = useState(initialState)

    function handleChange(event) {
        const updateMember = { ...member, [event.target.name]: event.target.value };

        setMember(updateMember);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addToList(member);
        setMember({ username: "",
        email: "",
        role: ""})
      }
    return(
        <form onSubmit={handleSubmit}>
           
           
            <label>Name</label>
            <input
                type='text'
                name='name'
                value={member.name}
                onChange={handleChange}
                placeholder='your name'
                />
            <label>Email</label>
            <input
                type='email'
                name='email'
                value={member.email}
                onChange={handleChange}
                placeholder='your email address'
                />
                <label>Role</label>
            <input
                type='text'
                name='role'
                value={member.role}
                onChange={handleChange}
                placeholder='your desired role'
                />
                <button type='submit'>
                    Submit
                </button>
        </form>
    )
}

export default Form