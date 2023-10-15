const inquirer = require('inquirer');

function askForAction() {
  return inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['View all departments', 'Add a department', 'Exit']
  });
}

function askForDepartmentName() {
  return inquirer.prompt({
    type: 'input',
    name: 'departmentName',
    message: 'What is the name of the department?'
  });
}

module.exports = {
  askForAction,
  askForDepartmentName,
};
