// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {

  let employeesArray = [];
  let addEmployeesBtn = true;
  while (addEmployeesBtn) {

    let fName = window.prompt("Enter First Name");
    let lName = window.prompt("Enter Last Name");
    let salary = parseFloat(window.prompt("Enter Salary"));


    if (isNaN(salary)) {
      salary = 0;
    }
    employeesArray.push({ firstName: fName, lastName: lName, salary: parseFloat(salary) });

    let continueB = window.confirm("Would you like to keep adding employees?");
    addEmployeesBtn = continueB;
  }

  return employeesArray;
}

// Display the average salary
function displayAverageSalary(employeesArray) {
  let sum = 0
  for (let i = 0; i < employeesArray.length; i++) {
    sum += parseFloat(employeesArray[i].salary);
  }
  var avgSalary = sum / employeesArray.length;

  console.log(`The average salary between our  ${employeesArray.length}  employee(s) is $ ${typeof (avgSalary).toFixed(2)})`);

  return avgSalary;
}


// Select a random employee
function getRandomEmployee(employeesArray) {

  const rndemp = employeesArray[Math.floor(Math.random() * employeesArray.length)];

  console.log(`Congratulations to ` + rndemp.firstName + " " + rndemp.lastName + `, our random drawing winner.`);

  return rndemp;

}



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
