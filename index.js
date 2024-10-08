// Sample employee object
let employee = {
    name: "John",
    streetAddress: "123 Main St"
};

// Function to update an employee with a new key and value (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to destructively update an employee with a new key and value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Modifies the original employee object
    return employee;
}

// Function to delete a key from a clone of the employee (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to destructively delete a key from the employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Modifies the original employee object
    return employee;
}

