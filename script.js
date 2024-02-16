//Capturando os elementos
let elementoH1 = document.querySelector("h1")
let elementoA = document.querySelector("a")

//Adicionando conteúdo textual
elementoH1.innerText = "Meus cursos"
elementoA.innerText = "Site Proz"

//Capturando os elementos
let listaNaoOrdenada = document.querySelector("ul")
let listaOrdenada = document.querySelector("ol")

//Adionando três itens na lista não  ordenada
listaNaoOrdenada.innerHTML = `
  <li>Logica</li>
  <li>HTML</li>
  <li>Banco De Dados</li>
`
//Adionando três itens com links na lista não  ordenada
listaOrdenada.innerHTML = `
<li><a href="https://www.instagram.com/">Instagram</a></li>
<li><a href="https://www.facebook.com/">Facebook</a></li>
<li><a href="https://www.twitter.com/">Twitter</a></li>
`