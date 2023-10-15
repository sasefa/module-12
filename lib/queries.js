const mysql = require('mysql2/promise');
const util = require('util');
const { getDbConnection } = require('../index');
require('dotenv').config();



async function viewAllDepartments() {
    const connection = await getDbConnection();
    const departments = await connection.promise().query('SELECT * FROM department');
    connection.end();
    return departments;
  }
  
  async function addDepartment(departmentName) {
    const connection = await getDbConnection();
    const result = await connection.promise().query('INSERT INTO department SET ?', { name: departmentName });
    connection.end();
    return result;
  }

module.exports = {
  viewAllDepartments,
  addDepartment
};
