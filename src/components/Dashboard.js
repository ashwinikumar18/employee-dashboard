import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import axios from 'axios';
import './Dashboard.css';

const API_URL = 'http://localhost:5000/api/employees';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API_URL);
      setEmployees(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching employee data:', error);
      setError('Failed to fetch employee data. Please try again later.');
      setLoading(false);
    }
  };

  const handleUpdateEmployee = async (updatedEmployee) => {
    try {
      await axios.put(`${API_URL}/${updatedEmployee.id}`, updatedEmployee);
      setEmployees(employees.map(emp => 
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      ));
    } catch (error) {
      console.error('Error updating employee:', error);
      setError('Failed to update employee. Please try again.');
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setEmployees(employees.filter(emp => emp.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
      setError('Failed to delete employee. Please try again.');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Employee Dashboard</h1>
      <div className="employee-grid">
        {employees.map((employee) => (
          <EmployeeCard 
            key={employee.id} 
            employee={employee} 
            onUpdate={handleUpdateEmployee}
            onDelete={handleDeleteEmployee}
          />
        ))}
      </div>
    </div>
  );
};
export default Dashboard;