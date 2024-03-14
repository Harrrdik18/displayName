import React, { useState } from 'react';

function FullNameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() === '' || lastName.trim() === '') {
      setFormError('Please fill in both first name and last name.');
    } else {
      setFullName(`${firstName} ${lastName}`);
      setFormError('');
    }
  };

  return (
    <div className="fullname-form">
      <h1>Enter your Full Name</h1>
      <form onSubmit={handleSubmit}>
      <label for="fname">First name:</label> 
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br></br>
      <label for="fname">Last name:</label> 

        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
          <br></br>

        <button type="submit" disabled={firstName.trim() === '' || lastName.trim() === ''}>Submit</button>
      </form>
      {fullName && <h2>Your Full Name: {fullName}</h2>}
      {formError && <p className="error">{formError}</p>}
    </div>
  );
}

export default FullNameForm;
