const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


let resposta = ""     //string com resposta a ser exibida
let numContas = 0   //inicializador contador....
let valorTotal = 0  //acumulador de variáveis globais

form.addEventListener("submit", (e)=>{ // "escuta" o evento submit do form
e.preventDefault() //evita envio do form

const descricao = form.inDescricao.value // obtem dados da conta 
const valor = Number(form.inPagar.value)

numContas++ // adiciona valor ao contador e acumulador
valorTotal = valorTotal + valor
resposta = resposta + descricao + "- R$ " + valor.toFixed(2) + "\n"
resp1.innerText= `${resposta} -------------------------`
resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`

form.inDescricao.value= "" // limpa os campos do form
form.inPagar.value= ""
form.inDescricao.focus()= "" //posiciona no campo inDescricao do form

})