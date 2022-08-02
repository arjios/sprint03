import { productService} from "../Services/product-service.js";

const newProduct = (name, imageUrl, price) => {
    const card = document.createElement("div")
    const content = `
        <div class="cards">
        <table class="card__table">
            <tbody class="card__container">
                <tr class="card__row">
                    <td class="card__content">
                        <img src="${imageUrl}}" alt="Caneca">
                        <h3>${name}</h3>
                        <h4 class="card__preco">${price}</h4>
                        <a href="#" class="product__link">
                            Ver produto
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>    
        </div>`
        card.innerHTML = content
        return card
}

const products = document.querySelector("[data-product]")
const render = async () => {
    try {
        const findProduutcs = await productService.productFindAll()
        findProduutcs.forEach(element => {
            products.appendChild(newProduct(element.name, element.imageUrl, element.price))
        });
    }
    catch(error) {
        console.log(error)
    }
}

render()

