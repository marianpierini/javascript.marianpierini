document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".form-control");
    const productos = document.querySelectorAll(".card");

    searchBar.addEventListener("input", function () {
      const searchTerm = searchBar.value.trim().toLowerCase();

      productos.forEach((producto) => {
        const productName = producto.querySelector(".card-title").textContent.toLowerCase();

        if (productName.includes(searchTerm)) {
          producto.style.display = "block";
        } else {
          producto.style.display = "none";
        }
      });
    });
  });