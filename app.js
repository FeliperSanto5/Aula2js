function compra(){

  let h1 = document.querySelector("h1")
  let h2 = document.querySelector("h2")
  let img = document.querySelector("img")

    let pergunta = confirm("Vamos aproveitar esta promoção hoje?")
    let anoAtual = 2024
    let validar = parseInt(prompt("Me informe o ano de nascimento"))
    let res = anoAtual - validar
if (pergunta == true && res >= 18) {
    nome = prompt ("Perfeito! para começarmos, qual é seu nome?")
    number = (prompt("Legal, " +nome+ "! Agora, para finalizar, me informe o numero da conta:"))

    h1.innerHTML = "Muito obrigado, " +nome+ "!"
    h2.innerHTML = "Parabéns pela sua compra."
    img.src = "win.gif"


} else{
  alert("Desculpe, é necessário ser maior de 18 anos para efetuar a compra.")  
}
}
