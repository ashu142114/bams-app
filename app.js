let isLogin = true;
let currentUser = null;

/* ---------------- SPLASH ---------------- */
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("auth").classList.remove("hidden");
}, 1500);

/* ---------------- AUTH TOGGLE ---------------- */
function toggleAuth() {
  isLogin = !isLogin;

  document.getElementById("authTitle").innerText = isLogin ? "Login" : "Signup";
  document.getElementById("authBtn").innerText = isLogin ? "Login" : "Signup";

  document.getElementById("nameField").classList.toggle("hidden");
  document.getElementById("error").innerText = "";
}

/* ---------------- AUTH ---------------- */
function handleAuth() {
  showLoading(true);

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let name = document.getElementById("name").value.trim();

  setTimeout(() => {
    let user = users.find(u => u.email === email);

    if (isLogin) {
      if (!user) return showError("User not found");
      if (user.password !== password) return showError("Invalid password");

      loginSuccess(user);

    } else {
      if (user) return showError("User already exists");

      let newUser = {
        name,
        email,
        password,
        role: "Employee",
        team: "Alpha",
        salary: 20000
      };

      users.push(newUser);
      saveUsers();
      loginSuccess(newUser);
    }

    showLoading(false);
  }, 800);
}

function showError(msg) {
  document.getElementById("error").innerText = msg;
  showLoading(false);
}

function showLoading(state) {
  document.getElementById("loading").classList.toggle("hidden", !state);
}

/* ---------------- LOGIN SUCCESS ---------------- */
function loginSuccess(user) {
  currentUser = user;
  localStorage.setItem("session", JSON.stringify(user));

  document.getElementById("auth").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  loadDashboard();
}

/* ---------------- LOGOUT ---------------- */
function logout() {
  localStorage.removeItem("session");
  location.reload();
}

/* ---------------- DASHBOARD ---------------- */
function loadDashboard() {
  document.getElementById("roleTitle").innerText = currentUser.role;
  document.getElementById("userName").innerText = currentUser.name;

  renderNav();
  renderHome();
}

/* ---------------- NAVIGATION ---------------- */
function renderNav() {
  let nav = document.getElementById("bottomNav");
  let tabs = [];

  if (currentUser.role === "Admin") {
    tabs = ["Home", "Users", "Teams", "Reports", "Profile"];
  } 
  else if (currentUser.role === "HR") {
    tabs = ["Home", "Employees", "Leaves", "Salary", "Profile"];
  } 
  else if (currentUser.role === "Leader") {
    tabs = ["Home", "Tasks", "Team", "Reports", "Profile"];
  } 
  else {
    tabs = ["Home", "Attendance", "Tasks", "Reports", "Profile"];
  }

  nav.innerHTML = tabs.map(tab =>
    `<button onclick="navigate('${tab}')">${tab}</button>`
  ).join("");
}

function navigate(tab) {
  clearError();

  switch (tab) {
    case "Home":
      renderHome();
      break;
    case "Users":
      renderUsers();
      break;
    case "Attendance":
      renderAttendance();
      break;
    case "Tasks":
      renderTasks();
      break;
    case "Profile":
      renderProfile();
      break;
    default:
      renderComingSoon(tab);
  }
}

/* ---------------- HOME ---------------- */
function renderHome() {
  document.getElementById("content").innerHTML = `
    <div class="card">
      <h3>Welcome ${currentUser.name}</h3>
      <p>Role: ${currentUser.role}</p>
      <p>Team: ${currentUser.team}</p>
    </div>
  `;
}

/* ---------------- USERS (ADMIN) ---------------- */
function renderUsers() {
  if (currentUser.role !== "Admin") return showError("Access Denied");

  let list = users.map((u, i) => `
    <div class="card">
      <strong>${u.name}</strong><br>
      ${u.email} - ${u.role}
      <br>
      <button onclick="deleteUser(${i})">Delete</button>
    </div>
  `).join("");

  document.getElementById("content").innerHTML = `
    <div class="card">
      <input id="newName" placeholder="Name">
      <input id="newEmail" placeholder="Email">
      <select id="newRole">
        <option>Employee</option>
        <option>HR</option>
        <option>Leader</option>
      </select>
      <button onclick="addUser()">Add User</button>
    </div>
    ${list}
  `;
}

function addUser() {
  let name = document.getElementById("newName").value;
  let email = document.getElementById("newEmail").value;
  let role = document.getElementById("newRole").value;

  users.push({
    name,
    email,
    password: "User@123",
    role,
    team: "Alpha",
    salary: 20000
  });

  saveUsers();
  renderUsers();
}

function deleteUser(i) {
  users.splice(i, 1);
  saveUsers();
  renderUsers();
}

/* ---------------- ATTENDANCE ---------------- */
function renderAttendance() {
  document.getElementById("content").innerHTML = `
    <div class="card">
      <h3>Attendance</h3>
      <button onclick="alert('Punch In Done')">Punch In</button>
      <button onclick="alert('Punch Out Done')">Punch Out</button>
    </div>
  `;
}

/* ---------------- TASKS ---------------- */
function renderTasks() {
  document.getElementById("content").innerHTML = `
    <div class="card">
      <h3>Tasks</h3>
      <p>No tasks yet</p>
    </div>
  `;
}

/* ---------------- PROFILE ---------------- */
function renderProfile() {
  document.getElementById("content").innerHTML = `
    <div class="card">
      <h3>${currentUser.name}</h3>
      <p>${currentUser.email}</p>
      <p>${currentUser.role}</p>
    </div>
  `;
}

/* ---------------- EXTRA ---------------- */
function renderComingSoon(name) {
  document.getElementById("content").innerHTML = `
    <div class="card">
      <h3>${name}</h3>
      <p>Coming soon...</p>
    </div>
  `;
}

function clearError() {
  document.getElementById("error").innerText = "";
}

/* ---------------- AUTO LOGIN ---------------- */
(function autoLogin() {
  let session = JSON.parse(localStorage.getItem("session"));
  if (session) {
    currentUser = session;
    document.getElementById("auth").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    loadDashboard();
  }
})();