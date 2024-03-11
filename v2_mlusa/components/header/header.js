function toggleContent() {
    // Seleciona o elemento que queremos mostrar ou ocultar
    var content = document.getElementById("content");
    var menu = document.getElementById("menu");
    var close = document.getElementById("close");

    // Verifica se o conteúdo está atualmente visível ou oculto
    if (content.style.display === "none") {
        // Se estiver oculto, mostra o conteúdo
        content.style.display = "block";
        menu.style.display = "none";
        close.style.display = "block";

    } else {
        // Se estiver visível, oculta o conteúdo
        content.style.display = "none";
        close.style.display = "none";
        menu.style.display = "block";
    }
}