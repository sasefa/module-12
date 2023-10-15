// Add these lines at the top of your index.js file
console.log(process.env.DB_PASSWORD);
const mysql = require('mysql2');
require('dotenv').config()

function getDbConnection() {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    return connection;
}

module.exports = { getDbConnection };

const { askForAction, askForDepartmentName } = require('./lib/prompts');
const { addDepartment, viewAllDepartments } = require('./lib/queries');
// Pass the database connection to the queries module.

async function main() {
  let exit = false;
  while (!exit) {
    const { action } = await askForAction();
    switch (action) {
      case 'View all departments':
        const departments = await viewAllDepartments();
        console.table(departments);
        break;
      case 'Add a department':
        const { departmentName } = await askForDepartmentName();
        await addDepartment(departmentName);
        console.log('Department added!');
        break;
      case 'Exit':
        exit = true;
        break;
    }
  }
  console.log('Goodbye!');
}

main();

