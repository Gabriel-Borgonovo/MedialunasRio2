const d = document;
const $contenedorDeProductos = d.getElementById("container-products");

export default function renderProducts(){
    
    fetch('../data/promos.json')
        .then( (resp) => resp.json() )
        .then( (data) => {
            pintarProductos(data);
            // console.log(data);
        });       
        
}


const pintarProductos = (data) => {

    console.log('data', data);
    const $template = d.getElementById("template-productos").content,
        $fragment = d.createDocumentFragment();
    
    data.forEach(producto => {
        $template.querySelector("img").setAttribute('src', producto.img);
        $template.querySelector("img").setAttribute('alt', producto.title);
        $template.querySelector("img").setAttribute('title', producto.title);

        $template.querySelector("h3").textContent = producto.title;
        $template.querySelector(".descripcion").textContent = producto.variedad1;
        $template.querySelector("span").textContent = producto.price;
        // $template.querySelector("button").dataset.id = producto.id;

        const clone = $template.cloneNode(true);
        $fragment.appendChild(clone);
    });

    $contenedorDeProductos.appendChild($fragment);
}

