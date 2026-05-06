function carregarCapitulo(listaDeImagens) {
  const container = document.getElementById("reader");

  listaDeImagens.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("pagina");
    container.appendChild(img);
  });
}
