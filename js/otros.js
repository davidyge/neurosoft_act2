function mostrarInputOtros() {
    var selectRubro = document.getElementById("rubro1");
    var inputOtros = document.getElementById("inputOtros");

    if (selectRubro.value === "otros") {
        inputOtros.style.display = "block";
    } else {
        inputOtros.style.display = "none";
    }
}