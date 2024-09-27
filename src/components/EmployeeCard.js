import React, { useState } from 'react';
import EditEmployeeForm from './EditEmployeeForm';
import './EmployeeCard.css';

const EmployeeCard = ({ employee, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedEmployee) => {
    onUpdate(updatedEmployee);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(employee.id);
  };

  return (
    <div className="employee-card">
      {isEditing ? (
        <EditEmployeeForm 
          employee={employee} 
          onSave={handleSave} 
          onCancel={handleCancel}
        />
      ) : (
        <>
          <h2 className="employee-name">{employee.name}</h2>
          <p className="employee-email">Email: {employee.email}</p>
          <p className="employee-body">{employee.body}</p>
          <div className="button-group">
            <button className="edit-button" onClick={handleEdit}>Edit</button>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeeCard;
