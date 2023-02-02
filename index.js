// Import inquirer, mysql and console.table.
const inquirer = require("inquirer");
const mysql = require("mysql2");
const ctable = require("console.table");

const db = mysql.createConnection(
	{
		host: "localhost",
		user: "root",
		password: "password",
		database: "company_db",
	},
	console.log("Connected to the company_db database.")
);

const options = [
	"view all departments",
	"view all roles",
	"view all employees",
	"add a department",
	"add a role",
	"add an employee",
	"update an employee role",
	"quit",
];

function companyViewer() {
	inquirer
		.prompt({
			type: "list",
			message: "Select one of the following options:",
			name: "menu",
			choices: options,
		})
		.then((res) => {
			switch (res.menu) {
				case options[0]:
					const department = `SELECT * FROM department`;
					viewAll(department);
					break;
				case options[1]:
					const role = `SELECT role.id, title, department.name, salary 
						FROM role 
						JOIN department ON department_id = department.id`;
					viewAll(role);
					break;
				case options[2]:
					const employee = `SELECT e.id, e.first_name, e.last_name, role.title, department.name as department, role.salary, CONCAT(m.first_name," ", m.last_name) AS manager
					FROM employee e
					LEFT JOIN employee m ON e.manager_id = m.id
					JOIN role ON e.role_id = role.id
					JOIN department ON role.department_id = department.id;`;
					viewAll(employee);
					break;
				case options[3]:
					//TODO: add a department
					addDept();
					break;
				case options[4]:
					//TODO: add a role
					addRole();
					break;
				case options[5]:
					//TODO: add an employee
					addEmployee();
					break;
				case options[6]:
					//TODO: update an employee role
					updateEmployee();
					break;
				default:
					console.log("Exiting company viewer.");
			}
		})
		.catch((err) => {
			throw err;
		});
}

function viewAll(sql) {
	db.promise()
		.query(sql)
		.then(([rows, fields]) => {
			console.table(rows);
		})
		.catch((err) => {
			console.log(err);
		})
		.then(() => {
			companyViewer();
		});
}

function addDept() {
	inquirer
		.prompt()
		.then()
		.catch((err) => {
			throw err;
		});
}

function addRole() {
	inquirer
		.prompt()
		.then()
		.catch((err) => {
			throw err;
		});
}

function addEmployee() {
	inquirer
		.prompt()
		.then()
		.catch((err) => {
			throw err;
		});
}

function updateEmployee() {
	inquirer
		.prompt()
		.then()
		.catch((err) => {
			throw err;
		});
}

console.log(` ___            _                    _____            _           
| __|_ __  _ __| |___ _  _ ___ ___  |_   _| _ __ _ __| |_____ _ _ 
| _|| '  \\| '_ \\ / _ \\ || / -_) -_)   | || '_/ _\` / _| / / -_) '_|
|___|_|_|_| .__/_\\___/\\_, \\___\\___|   |_||_| \\__,_\\__|_\\_\\___|_|
	  |_|         |__/                                        `);

companyViewer();
