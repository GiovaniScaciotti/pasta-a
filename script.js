var produtos = [
    {
        imagem: 'gates.jpg',
        nome: 'Guitarra Synister Gates',
        texto:'',
    },
    {
        imagem: 'strato.jpg',
        nome: 'Guitarra',
        texto:'',
    }
    
    
    
]

produtos.map((produto)=> {
       document.getElementById('produtos').innerHTML += `
    <div class="produto">
    <img src ="${produto.imagem}">
    <h2>${produto.nome}</h2>
    <p>${produto.texto}</p>
    <button>Comprar</button>
    </div>
    `

})
