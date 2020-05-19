import { Request } from './requests'
import { UI } from './ui'

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees")
const updateEmployeeButton = document.getElementById("update")


const request = new Request("http://localhost:3000/employees")
const ui = new UI()
eventListener();

function eventListener() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee)
    employeesList.addEventListener("click", updateOrDeleteEmployee)
}

function getAllEmployees() {
    request.get()
        .then(employees => {
            ui.getAllEmployeeToUI(employees)
        }).catch(err => alert(err))

}

function addEmployee(e) {

    const employeeName = nameInput.value.trim()
    const employeeDepartment = departmentInput.value.trim()
    const employeeSalary = salaryInput.value.trim()
    if (employeeName === "" || employeeDepartment === "" || employeeSalary === "") {
        alert("Lütfen tüm alanları doldurunuz")
    }
    else {
        request.post({ name: employeeName, department: employeeDepartment, salary: Number(employeeSalary) })
            .then(employee => {
                ui.addEmployeeToUI(employee)
            })
            .catch(err => alert(err))
        ui.clearInput()
    }
    e.preventDefault();
}

function updateOrDeleteEmployee(e) {
    if (e.target.id === "update-employee") {
        updateEmployee(e.target)
    }
    else if (e.target.id === "delete-employee") {
        deleteEmployee(e.target)
    }
}

function deleteEmployee(targetEmployee) {
    const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent
    request.delete(id)
        .then(message => {
            ui.deleteEmployeeToUI(targetEmployee.parentElement.parentElement)
            alert(message)
        })
        .catch(err => alert(err))
}

// request.get()
// .then(employees => console.log(employees))
// .catch(err => console.log(err))

// request.post({name : "Personel",department:"Arge",salary:5000})
// .then(employee => console.log(employee))
// .catch(err => console.log(err))

// request.put({name : "Güncellenen Personel",department:"IT",salary:3000},5)
// .then(employee => console.log(employee))
// .catch(err => console.log(err))

// request.delete(4)
// .then(employee => console.log(employee))
// .catch(err => console.log(err))