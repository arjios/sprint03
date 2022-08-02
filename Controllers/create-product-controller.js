import { productService } from "../Services/product-service.js";

const form = document.querySelector("[data-form]")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const name = document.querySelector("[data-name]").value
    const url = document.querySelector("[data-url]").value
    const price = document.querySelector("[data-price]").value
    productService.productInsert(name, url, price)
        .then(response => {
            window.location.pathname = "/index.html"
        })
        .catch(err => {
            console.log("ERROR: Não foi possivel inserir produto.")
        })
})