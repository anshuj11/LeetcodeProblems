select unique_id, name from Employees
left outer join EmployeeUNI on EmployeeUNI.id = Employees.id
