import React, { useState } from 'react';
import './EditEmployeeForm.css';

const EditEmployeeForm = ({ employee, onSave, onCancel }) => {
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [body, setBody] = useState(employee.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...employee, name, email, body });
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        required
      ></textarea>
      <div className="form-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default EditEmployeeForm;