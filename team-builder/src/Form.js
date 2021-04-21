import React,{ useState, useEffect } from 'react';

export default function Form(props) {
    const { values, update, submit } = props;
    const onChange = evt => {
    const {name, value} = evt.target
    update(name, value)
      }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
      
    const [member, setMember] = useState({});

    // useEffect(() => {
    //     props.memberToEdit(values);
    //     }, [props.memberToEdit]);

     
    return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group inputs'>
        <label>Name
            <input 
                name='username' 
                type='text' 
                value={values.username} 
                onChange={onChange} 
                placeholder='type a name...'
                maxLength='30'
                />
        </label>

        <label>Email
            <input
            name='email' 
            type='email' 
            value={values.email} 
            onChange={onChange} 
            placeholder='name@email.com'
            />
        </label>

        <label>Role
            <select value={values.role} name='role' onChange={onChange}>
                <option value=''>--- Select role.. ---</option>
                <option value='FRONTEND ENGINEER'>FrontEnd Developer</option>
                <option value='BACKEND ENGINEER'>BackEnd Developer</option>
                <option value='FULL STACK ENGINEER'>Full Stack Developer</option>
                <option value='WEB DEVELOPER'>Web Developer</option>
                <option value='UI/UX DEVELOPER'>UI/UX Developer</option>
                <option value='WEB DESIGNER'>Web Designer</option>
            </select>
        </label>

        <div className='submit'>
            <button disabled={!values.username || !values.email || !values.role}>SUBMIT</button>
        </div>
        </div>
    </form>
    )
}