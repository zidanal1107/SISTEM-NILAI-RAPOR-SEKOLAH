/* =========================
   DATA AKUN (DUMMY)
   ========================= */
const akunAdmin = {
    username: "admin",
    password: "123"
};

let akunSiswa = {
    nama: "",
    kelas: "",
    absen: ""
};

const dataKelas = [
    "Teknik Komputer Dan Jaringan","Rekayasa Perangkat Lunak","Informatika","TKJ","RPL"
];


/* =========================
   LOGIN
   ========================= */
const loginS = document.getElementById("loginSiswa");
const loginA = document.getElementById("loginAdmin");

if (loginS) {
    loginS.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "loginSiswa.html";

        const nama = document.getElementById("Nama").value;
        const kelas = document.getElementById("kelas").value;
        const absen = document.getElementById("no-absen").value;

        if (!dataKelas.includes(kelas)) {
            alert("Hanya ada kelas TKJ,RPL,Informatika");
        } else {
            localStorage.setItem("login", "true");
            localStorage.setItem("role", "siswa");
            
            localStorage.setItem("siswa", JSON.stringify(akunSiswa));
        }
    });
};

if (loginA) {
    loginA.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });
};

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
            
            // SIMPAN DATA ADMIN
            localStorage.setItem("admin", JSON.stringify(akunAdmin));
            
            // pindah ke dashboard
            window.location.href = "dashboard.html";
        } else if (username !== akunAdmin.username) {
            alert("Username salah!");
        } else if (password !== akunAdmin.password) {
            alert("Password salah!");
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
