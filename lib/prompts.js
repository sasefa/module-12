module.exports = {
  mainPrompt: { type: 'list', name: 'action', message: 'What would you like to do?', 
    choices: [
      'View all departments', 
      'View all roles', 
      'View all employees', 
      'Add a department',
      'Add a role',
      'Add an employee', 
      'Update an employee role',
      'Exit'
    ]
  },

  askForDepartmentName: { type: 'input', name: 'name', message: 'What is the name of the department?' },

  askForRoleDetails: [
    { type: 'input', name: 'title', message: 'Enter role title: ' },
    { type: 'number', name: 'salary', message: 'Enter the role salary: ' },
    { type: 'number', name: 'department_id', message: 'Enter the department id the role belongs to: ' }
  ],
  
  askForEmployeeDetails: [
    { type: 'input', name: 'first_name', message: 'Enter the employee first name: ' },
    { type: 'input', name: 'last_name', message: 'Enter the employee last name: ' },
    { type: 'number', name: 'role_id', message: 'Enter the role id the employee belongs to: ' },
    { type: 'number', name: 'manager_id', message: 'Enter the manager id if this employee has a manager: ' }
  ],
  
  askForEmployeeRoleUpdate: [
    { type: 'number', name: 'employee_id', message: 'Enter the id of the employee that needs to be updated: ' },
    { type: 'number', name: 'new_role_id', message: 'Enter the new role id: ' }
  ]
};
