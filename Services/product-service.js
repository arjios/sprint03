
//GET
const productFindAll = () => {
    fetch("http://localhost:3000/produto")
        .then(response => response.json())
}

//POST
const productInsert = () => {
    fetch("http://localhost:3000/produto", {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json" 
        },
        body: JSON.stringify({
            name,
            imageUrl,
            price
        })
    })
    .then(response => {
        if(response.ok) {
            return response.body
        }
        throw new Error("ERROR: Não foi possivel criar o produto")
    })    
}

export const productService = {
    productFindAll,
    productInsert
}