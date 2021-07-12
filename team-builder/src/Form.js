import React from 'react'


// this module holds the form and input that will display on screen.


function Form() {
	return (
		<form className="col">
			<div className="row">
				<label htmlFor="name" className="form-label">Name:</label>
				<input type="text" className="form-control-lg" name="name" placeholder="enter your name" />
			</div>
			<div className="row">
				<label htmlFor="email" className="form-label">Email:</label>
				<input type="email" className="form-control-lg" name="email" placeholder="enter your email" />
			</div>
			<div className="row">
				<label htmlFor="email" className="form-label">Role:</label>
				<input type="text" className="form-control-lg" name="role" placeholder="what is your role?" />
			</div>
			<button type="button" className="btn btn-sm btn-primary">Submit</button>
			
		</form>
	)
}

export default Form