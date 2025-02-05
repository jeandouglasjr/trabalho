let imgUrl = document.getElementById("imgUrl");
let titulo = document.getElementById("titulo");
let preco = document.getElementById("preco");
let descricao = document.getElementById("descricao");

let produtoBox = JSON.parse(localStorage.getItem("@newBox")) || [];
carregarBox();

function enviarBox(event){
    event.preventDefault();

    let novaUrl = imgUrl.value;
    let novoTitulo = titulo.value;
    let novoPreco = preco.value;
    let novaDescricao = descricao.value;

    let novoBox = {
        url: novaUrl,
        titulo: novoTitulo,
        preco: novoPreco,
        descri: novaDescricao
    }

    produtoBox.push(novoBox);

    alert('Novo Box salvo com sucesso!')

    imgUrl.value = '';
    titulo.value = '';
    preco.value = '';
    descricao.value = '';

    salvarBoxLocal();

    carregarBox();
}

function salvarBoxLocal() {

    localStorage.setItem("@newBox", JSON.stringify(produtoBox));
}

  //--------------------------------------------------------------------
 //---> Função para renderizar o box dos livros na area de destaque da pagina:
//Essa função bucas as informações do localStora e se hover algo no array = (produtoBox) ela renderiza na tela.

function carregarBox(){
    const containerBox = document.getElementById("containerBox"); //Declaramos uma variavel para chamar a <div> da seção destaques do (HTML-linha 40)
    containerBox.innerHTML = "", // Aqui nos aseguramos que o conteudo da varial containerBox estara vazio.

    produtoBox.map((item) => { // Nessa linha usamos o metodo (map) para mapear o array = produtoBox e avisamos que ele vai receber um parametro (item)
        const card = document.createElement("div");// Declaramos uma varialvel e utilizamos o (createElement) para criar um elemto no caso uma <div> no nosso index.html
        card.className = "box";//Nessa linha atribuimos uma classe a nossa <div> isso se faz necessario para depois chama-la no CSS 

        //Nessas linhas a baixo estamos criando o proprio box dos livros em si
        //card é a nossa variavel e o .innerHTML indica que queremos renderizar algo no HTML e dentro da aspas usamos HTML para montar nosso box de livro.
        //Os elementos entre ${} vão receber os valores declarados dentro do nosso objeto onde (item) avisamos que queremos bucar um item de detro do objeto e depois falamos qua dos item(.url)  ou item(.descri) ou item(.titulo) ou item(.preco)
        card.innerHTML = ` 
                    <div class="box-header">
                        <img src="${item.url}">
                        <span>
                            ${item.descri}
                            <a class="ler-mais" href="#">Ler mais...</a>
                        </span>
                    </div>
                    
                    <div class="box-text">
                        <h3>${item.titulo}</h3>
                        
                        <div class="buy">
                            <p><strong>R$ </strong>${item.preco}</p>
                            <div class="btn-icon">
                                <button>comprar</button>
                                <a href="">
                                    <i class="bi bi-basket"></i>
                                </a>
                            </div>
                        </div>
                    </div>
        `;

        containerBox.appendChild(card); //Aqui indicamos que o nosso containerBox tem um apendice filho algo que vai dentro dele no caso o nosso (card);
    })
}