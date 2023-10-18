const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const prompts = require('./lib/prompts');
const queries = require('./lib/queries');
require('console.table');

async function main() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1start2start!',
    database: 'employee_db',
  });

  const { action } = await inquirer.prompt(prompts.mainPrompt);

  switch (action) {
    case 'View all departments':
      const [departments] = await connection.query(queries.viewAllDepartments);
      console.table(departments);
      break;

    case 'View all roles':
      const [roles] = await connection.query(queries.viewAllRoles);
      console.table(roles);
      break;

    case 'View all employees':
      const [employees] = await connection.query(queries.viewAllEmployees);
      console.table(employees);
      break;

    case 'Add a department':
      const { name } = await inquirer.prompt(prompts.askForDepartmentName);
      await connection.query(queries.addDepartment, { name });
      console.log('Department added!');
      break;

    case 'Add a role':
      const role = await inquirer.prompt(prompts.askForRoleDetails);
      await connection.query(queries.addRole, [role.title, role.salary, role.department_id]);
      console.log('Role added!');
      break;

    case 'Add an employee':
      const employee = await inquirer.prompt(prompts.askForEmployeeDetails);
      await connection.query(queries.addEmployee, [employee.first_name, employee.last_name, employee.role_id, employee.manager_id || null]);
      console.log('Employee added!');
      break;

    case 'Update an employee role':
      const employeeRoleDetails = await inquirer.prompt(prompts.askForEmployeeRoleUpdate);
      await connection.query(queries.updateEmployeeRole, [employeeRoleDetails.new_role_id, employeeRoleDetails.employee_id]);
      console.log('Employee role updated!');
      break;

    default:
      console.log("Goodbye!");
      return connection.end();
  }

  return main();
}

main().catch(console.error);
