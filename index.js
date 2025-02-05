let nome = document.getElementById('nome');     //
let fone = document.getElementById('fone');    //---> Nas linas (1, 2, 3) estamos declarando 3 variaveis com o menos nome que demos para os (id: nos inputs HTML).
let email = document.getElementById('email'); //---> (obs: É como se estivessemos chamando elas do HTML para o JavaScript.)


let user = JSON.parse(localStorage.getItem("@newUser")) || [];
//---> Nessa linha(6) solicitando uma busca no meu localStorage atraves do (getItem == pegar, buscar um item).
//---> O (@newUser) é a nossa chave do localStorage, indica onde salvaremos as informações.
//---> O (||) indica (OU)
//---> Ou seja se a nossa busca no localStorage nos retornar que não exite nada salvo ainda iniciamos de um Array vazio => [];

function enviarDados(event){ //---> função para receber as 3 informações dos inputs => transformar em um objeto e salvar dentro do Array =>[];
    event.preventDefault(); //---> Por padrão o form do HTML reinicia quando é enviado, esse linha impede que isso aconteça. (estamos prevenindo um evento indesejado).

    let novoNome = nome.value;     //
    let novoFone = fone.value;    //---> nas linha (15, 16, 17) declaramos 3 variaveis para receber os valor dos 3 inputs o (.value) é para pegar o valor do input
    let novoEmail = email.value; //

    let novoUser = {        //---> Na linha (19) declaramo uma variavel para receber um objeto => {}
        nome: novoNome,    //---> O (name:) esta recebendo o valor da variavel (novoNome) => que por sua vez recebeu o valor do input (nome.value) na linha (15).
        fone: novoFone,   //---> (fone:) recebe valor de (novoFone) => que recebeu o valor do input (fone.value) na linha (16).
        email: novoEmail //---> (email:) recebe valor de (novoEmail) => que recebeu o valor do input (email.value) na linha (17).
    }                   //---> Por fim temos o objeto => { name: novoNome, fone: novoFone, email: novoEmail } => com 3 valores nome: fone: email:

    user.push(novoUser); //---> Na linha 25 pegamos o objeto pronto com os seus 3 valores e atraves do (push) enviamos para o Array (let user = []) na linha (6)

    alert(`Dados salvos com sucesso!`); //---> Imprimimos na tela um alert para o usuario.

    salvarNoLocal(); //---> E na linha 29 chamanos a proxima função (salvarNoLocal()) => função responsavel por salvar o nosso Array (user = []) no localStorage.

}

function salvarNoLocal(){ //Essa função é responsavel por salvar o nosso Array no localStorage

    localStorage.setItem("@newUser", JSON.stringify(user));
         //---> Na linha (35) estamos acessando o nosso => (localStorage).
        //---> atraves do (setItem) indicamos que queremos salvar um item.
       //---> Esse item sera salvo na nossa chave (@newUser) => aqui indicamos onde vamos salvar o nosso Array (user =[]).
      //---> Como o localStorage não recebe uma Array, temos que transformar nosso Array que possu um formato (JSON) em uma (string)...
     //---> Por isso (JSON.stringfy) estamos indicado a transformação do (JSON) para uma (string)...
    //---> E por fim informanos o que desejamos salva o nosso Array (user). 
}