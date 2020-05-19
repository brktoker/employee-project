export class UI {

    constructor() {
        this.employeeList = document.getElementById("employees")
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
    }

    getAllEmployeeToUI(employees) {
        let result = ""
        employees.forEach(employee => {
            result += `
            <tr> 
            <td>${employee.id}</td>                         
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            `
        })
        this.employeeList.innerHTML = result
    }

    addEmployeeToUI(employee) {
        this.employeeList.innerHTML += `
        <tr> 
        <td>${employee.id}</td>                         
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>
        `
    }

    clearInput() {
        this.nameInput.value = ""
        this.salaryInput.value = ""
        this.departmentInput.value = ""
    }

    deleteEmployeeToUI(element) {
        element.remove()
    }
}