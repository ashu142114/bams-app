let users = JSON.parse(localStorage.getItem("users")) || [

  // ADMIN
  {
    name: "Admin",
    email: "admin@bams.com",
    password: "Admin@123",
    role: "Admin",
    team: "Alpha",
    salary: 80000
  },

  {
    name: "CTO",
    email: "cto@bams.com",
    password: "Cto@123",
    role: "Admin",
    team: "Alpha",
    salary: 100000
  },

  // HR
  {
    name: "HR 1",
    email: "hr1@bams.com",
    password: "Hr@123",
    role: "HR",
    team: "Beta",
    salary: 50000
  },
  {
    name: "HR 2",
    email: "hr2@bams.com",
    password: "Hr@123",
    role: "HR",
    team: "Gamma",
    salary: 50000
  },

  // TEAM LEADERS
  {
    name: "Lead 1",
    email: "lead1@bams.com",
    password: "Lead@123",
    role: "Leader",
    team: "Alpha",
    salary: 60000
  },
  {
    name: "Lead 2",
    email: "lead2@bams.com",
    password: "Lead@123",
    role: "Leader",
    team: "Beta",
    salary: 60000
  },
  {
    name: "Lead 3",
    email: "lead3@bams.com",
    password: "Lead@123",
    role: "Leader",
    team: "Gamma",
    salary: 60000
  },
  {
    name: "Lead 4",
    email: "lead4@bams.com",
    password: "Lead@123",
    role: "Leader",
    team: "Delta",
    salary: 60000
  },

  // EMPLOYEES (10)
  {
    name: "Emp 1",
    email: "emp1@bams.com",
    password: "User@123",
    role: "Employee",
    team: "Alpha",
    salary: 25000
  },
  {
    name: "Emp 2",
    email: "emp2@bams.com",
    password: "User@123",
    role: "Employee",
    team: "Alpha",
    salary: 25000
  },
  {
    name: "Emp 3",
    email: "emp3@bams.com",
    password: "User@123",
    role: "Employee",
    team: "Beta",
    salary: 25000
  },
  {
    name: "Emp 4",
    email: "emp4@bams.com",
    password: "User@123",
    role: "Employee",
    team: "Beta",
    salary: 25000
  },
  {
    name: "Emp 5",
    email: "emp5@bams.com",
    password: "User@123",
    role: "Employee",
    team: "Gamma",
    salary: 25000
  },
  {
    name: "Emp 6",
    email: "emp6@bams.com",
    password: "User@123",
    role: "Employee",
    team: "Gamma",
    salary: 25000
  },
  {
    name: "Emp 7",
    email: "emp7@bams.com",
    password: "User@123",
    role: "Employee",
    team: "Delta",
    salary: 25000
  },
  {
    name: "Emp 8",
    email: "emp8@bams.com",
    password: "User@123",
    role: "Employee",
    team: "Delta",
    salary: 25000
  },
  {
    name: "Emp 9",
    email: "emp9@bams.com",
    password: "User@123",
    role: "Employee",
    team: "Alpha",
    salary: 25000
  },
  {
    name: "Emp 10",
    email: "emp10@bams.com",
    password: "User@123",
    role: "Employee",
    team: "Beta",
    salary: 25000
  }

];

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}