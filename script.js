const totalPaginas = 20;
const container = document.querySelector(".comic-reader");

for(let i = 1; i <= totalPaginas; i++) {

  const img = document.createElement("img");

  img.src = `pages/${String(i).padStart(3, "0")}.webp`;

  img.loading = "lazy";

  container.appendChild(img);
}
