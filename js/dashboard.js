const switchToggle = document.getElementById("darkSwitch");

// aktifkan mode gelap jika sebelumnya aktif
if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark");
    if (switchToggle) switchToggle.checked = true;
}

// toggle mode gelap
if (switchToggle) {
    switchToggle.addEventListener("change", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "on");
        } else {
            localStorage.setItem("darkMode", "off");
        }
    });
}

// logout
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
