let valor = 0;
const contador = document.getElementById("contador");

document.getElementById("mas").addEventListener("click", () => {
    valor++;
    contador.textContent = valor;
});

document.getElementById("menos").addEventListener("click", () => {
    valor--;
    contador.textContent = valor;
});

document.getElementById("buscar").addEventListener("input", (e) => {
    const texto = e.target.value.toLowerCase();
    document.querySelectorAll("#lista li").forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(texto)
            ? "block"
            : "none";
    });
});
