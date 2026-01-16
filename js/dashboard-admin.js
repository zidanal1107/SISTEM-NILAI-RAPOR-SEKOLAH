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

// PINDAH PAGE
function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// =======================
// PRESENSI
// =======================
const presensi = localStorage.getItem("absen");
const tbodyPresensi = document.getElementById("dataPresensi");

if (presensi && tbodyPresensi) {
    tbodyPresensi.innerHTML = `
        <tr>
            <td>Siswa</td>
            <td>${presensi}</td>
        </tr>
    `;
}

// =======================
// INPUT NILAI
// =======================
const formNilai = document.getElementById("formNilai");
const dataNilai = document.getElementById("dataNilai");

let nilai = JSON.parse(localStorage.getItem("nilai")) || [];

function renderNilai() {
    dataNilai.innerHTML = "";
    if (nilai.length === 0) {
        dataNilai.innerHTML = "<tr><td colspan='3'>Belum ada nilai</td></tr>";
        return;
    }

    nilai.forEach(n => {
        dataNilai.innerHTML += `
            <tr>
                <td>${n.nama}</td>
                <td>${n.mapel}</td>
                <td>${n.nilai}</td>
            </tr>
        `;
    });
}

renderNilai();

formNilai.addEventListener("submit", e => {
    e.preventDefault();

    nilai.push({
        nama: namaSiswa.value,
        mapel: mapel.value,
        nilai: nilaiSiswa.value
    });

    localStorage.setItem("nilai", JSON.stringify(nilai));
    formNilai.reset();
    renderNilai();
});

// LOGOUT
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
