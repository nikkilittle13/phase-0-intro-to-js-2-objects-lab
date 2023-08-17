const employee = {
    name: "Nikki",
    streetAddress: "100 N 18th St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "921 N 20th St");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
        obj[key] = value;
      
        return obj;
}
const newName = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Marissa");

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee.name;
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}