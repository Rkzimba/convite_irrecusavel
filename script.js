function sim() {
    alert("Você aceitou sair comigo :) ")
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = aleatorio(10, 90);
    btn.style.left = aleatorio(10, 90);
    console.log(btn);
}

function aleatorio(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}