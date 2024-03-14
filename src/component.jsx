import React, {useState} from 'react';


function component() {
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
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    {fullName && <h2>Your Full Name: {fullName}</h2>}
    {formError && <p className="error">{formError}</p>}
  </div>
  )
}

export default component