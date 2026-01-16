// format data login
let akun = {
    user: "",
    pass: ""
}

const login = document.getElementById("formLogin");

if (login) {
    login.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const nama = document.getElementById("username").value.trim();
        const sandi = document.getElementById("password").value.trim();

        // ADMIN
        if (nama === "admin123" && sandi === "12345678") {
            localStorage.setItem("role", "admin");
            window.location.href = "dashboard-admin.html";
        }
        // SISWA
        else if (nama === "siswa" && sandi === "123") {
            localStorage.setItem("role", "siswa");
            window.location.href = "dashboard-siswa.html";
        }
        // KOSONG
        else if (nama === "" || sandi === "") {
            alert("Username dan password wajib diisi!");
        }
        // SALAH
        else {
            alert("Username atau password salah!");
        }
    });
}


const darkSwitch = document.getElementById("darkSwitch");

// cek mode terakhir
if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
    darkSwitch.checked = true;
}

darkSwitch.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("mode", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("mode", "light");
    }
});
