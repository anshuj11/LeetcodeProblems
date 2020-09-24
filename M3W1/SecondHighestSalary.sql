select Max(Salary) as SecondHighestSalary from Employee
where salary not in 
(select Max(Salary) from Employee)
