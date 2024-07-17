

const form  = document.querySelector("#formulario")
form.addEventListener("submit", obtenerFormulario)

async function obtenerFormulario(e){
    e.preventDefault();

    const inputForm = new FormData(form) //obtiene los inputs en forma de clave valor, la vlave es el name y el valor lo que escribimos en el input
    const objForm = Object.fromEntries(inputForm)
    //console.log(objForm) 
    const respuesta = await post(objForm)
    console.log(respuesta)
}

const header = new Headers({
    "Content-type": "application/json"
})

const post = async (datos) => {
    const resultado = await fetch("http://localhost:8080/api/post", {
        method: "POST",
        headers: header,
        body: JSON.stringify(datos)
    })

    const objJs= resultado.json();
    return objJs;

}