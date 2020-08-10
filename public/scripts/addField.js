//document.querySelector('#container').style.backgroundColor = "black"
//console.log()

// Encontre o botão
document.querySelector("#add-time")

// Quando você clica no botão
.addEventListener("click", cloneField)

//Executar uma ação
function cloneField() {
    
    // Duplique os campos. Quais campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) 

    // Limpe os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll("input")
    
    // Para cada campo, limpe.
    fields.forEach(function (field) {
            // Take the document field and clear it
        field.value = ""
  })
    // Coloque na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}





