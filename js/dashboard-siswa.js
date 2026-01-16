// MODE GELAP
const toggle = document.getElementById("darkSwitch");

if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark");
    toggle.checked = true;
}

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark") ? "on" : "off"
    );
});

// PAGE SWITCH
function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ABSEN
function absen() {
    const today = new Date().toLocaleDateString();
    localStorage.setItem("absen", today);
    document.getElementById("statusAbsen").innerText =
        "✅ Sudah absen tanggal " + today;
}

// LOAD STATUS ABSEN
const status = document.getElementById("statusAbsen");
const data = localStorage.getItem("absen");
if (data && status) {
    status.innerText = "✅ Sudah absen tanggal " + data;
}

// LOGOUT
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
