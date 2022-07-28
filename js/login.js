const userData = document.querySelector("#initsession")

userData.addEventListener("click", (evt) => {
    evt.preventDefault()
    console.log(document.getElementById("email").value)
    console.log(document.getElementById("pass").value)
})

