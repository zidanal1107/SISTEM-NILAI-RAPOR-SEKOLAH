let dataNilai = JSON.parse(localStorage.getItem("nilai")) || [];

function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function predikat(nilai) {
    if (nilai >= 90) return "A+";
    if (nilai >= 85) return "A";
    if (nilai >= 80) return "A-";
    if (nilai >= 75) return "B+";
    if (nilai >= 70) return "B";
    if (nilai >= 65) return "B-";
    if (nilai >= 60) return "C+";
    if (nilai >= 50) return "C";
    if (nilai >= 40) return "D";
    return "E";
}

function tampilData() {
    const tabel = document.getElementById("tabel-nilai");
    tabel.innerHTML = "";

    dataNilai.forEach((d, i) => {
        tabel.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${d.nama}</td>
                <td>${d.nilai}</td>
                <td>${predikat(d.nilai)}</td>
                <td>
                    <button onclick="hapusData(${i})" class="btn-hapus">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    });
}

function hapusData(index) {
    const yakin = confirm("Yakin ingin menghapus data ini?");
    if (yakin) {
        dataNilai.splice(index, 1);
        localStorage.setItem("nilai", JSON.stringify(dataNilai));
        tampilData();
    }
}


document.getElementById("nilai-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const nilai = document.getElementById("nilaiInput").value;

    dataNilai.push({ nama, nilai });
    localStorage.setItem("nilai", JSON.stringify(dataNilai));

    this.reset();
    tampilData();
});

function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}

tampilData();
