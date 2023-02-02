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
	console.log(` ___            _                    _____            _           
| __|_ __  _ __| |___ _  _ ___ ___  |_   _| _ __ _ __| |_____ _ _ 
| _|| '  \\| '_ \\ / _ \\ || / -_) -_)   | || '_/ _\` / _| / / -_) '_|
|___|_|_|_| .__/_\\___/\\_, \\___\\___|   |_||_| \\__,_\\__|_\\_\\___|_|
		|_|         |__/                                        `);
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
					//TODO: view all departments
					break;
				case options[1]:
					//TODO: view all roles
					break;
				case options[2]:
					//TODO: view all employees
					break;
				case options[3]:
					//TODO: add a department
					break;
				case options[4]:
					//TODO: add a role
					break;
				case options[5]:
					//TODO: add an employee
					break;
				case options[6]:
					//TODO: update an employee role
					break;
				default:
					console.log("Exiting company viewer.");
			}
		})
		.catch((err) => {
			throw err;
		});
}
