/* =========================
   DATA AKUN (DUMMY)
   ========================= */
const akunAdmin = {
    username: "admin",
    password: "123"
};

/* =========================
   LOGIN
   ========================= */
const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // cegah reload halaman

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === akunAdmin.username && password === akunAdmin.password) {
            // simpan status login
            localStorage.setItem("login", "true");
            localStorage.setItem("role", "admin");

            // pindah ke dashboard
            window.location.href = "dashboard.html";
        } else {
            alert("Username atau password salah!");
        }
    });
}

/* =========================
   PROTEKSI DASHBOARD
   ========================= */
if (window.location.pathname.includes("dashboard")) {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "index.html";
    }
}

/* =========================
   LOGOUT
   ========================= */
function logout() {
    localStorage.removeItem("login");
    localStorage.removeItem("role");
    window.location.href = "index.html";
}
