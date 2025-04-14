import { obtainCategories } from "../apiConnection/consumeApi.js";
//const url = "http://localhost:5000/api/categorias"
/*fetch(url)
.then(resultado=>{
    //onsole.log(resultado);
    return resultado.json();
})
.then(data=>{
    //console.log(data);
    showndata(data)
})*/

document.addEventListener("DOMContentLoaded", ()=>{
    getCategories();
})


async function getCategories(){
    const categoriasObtained = await obtainCategories();
    const container = document.querySelector('tbody')
    categoriasObtained.forEach((category)=>{
        const {CategoriaID ,CategoriaNombre,Descripcion,Imagen} = category
        const row = document.createElement('tr');
        row.innerHTML=`
            <td>
            ${CategoriaID}
            </td>
            <td>
            ${CategoriaNombre}
            </td>
            <td>
            ${Descripcion}
            </td>
            <td>
            <img src="${Imagen}" width="100px" class="cuenta">
            </td>
            <td>
            <button Class="btn color3">Details</button>
            </td>
            <td>
            <button Class="btn color2">Edit</button>
            </td>
            <td>
            <button Class="btn color5">Delete</button>
            </td>
            `;
            container.appendChild(row)
    })
}   