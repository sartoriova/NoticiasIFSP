//para não misturar html com js
document.querySelector(".opcaoCadastrar").setAttribute("href", "javascript:formCadastro()")
document.querySelector(".opcaoEsportes").setAttribute("href", "javascript:esportes()")
document.querySelector(".opcaoEntretenimento").setAttribute("href", "javascript:entretenimento()")
document.querySelector(".opcaoPolitica").setAttribute("href", "javascript:politica()")
document.querySelector(".opcaoPolicial").setAttribute("href", "javascript:policial()")
document.querySelector(".opcaoDiversos").setAttribute("href", "javascript:diversos()")

var lista_esportes = [["Notícia 1", "Subtítulo da notícia 1", "Conteúdo da notícia 1", new Date()], ["Notícia 2", "Subtítulo da notícia 2", "Conteúdo da notícia 2", new Date()], ["Notícia 3", "Subtítulo da notícia 3", "Conteúdo da notícia 3", new Date()], ["Notícia 4", "Subtítulo da notícia 4", "Conteúdo da notícia 4", new Date()]]
var lista_entretenimento = []
var lista_politica = []
var lista_policial = []
var lista_diversos = []

var div = document.querySelector("#geral")
var nomeCategoria = document.createElement("h1")

var aviso = document.createElement("h3")
aviso.setAttribute("id", "h3aviso")//para poder mexer no css
aviso.innerHTML = "<h3>Nenhuma notícia cadastrada!</h3>"

function formCadastro() {
    div.innerHTML = ""

    let form = document.createElement("form")

    let tagCategoria = document.createElement("strong")
    tagCategoria.innerText = "Categoria"
    form.appendChild(tagCategoria)

    let categoria = document.createElement("select")
    categoria.classList.add("form-select", "w-25%")
    categoria.setAttribute("id", "categoria")

    let opcaoInicial = document.createElement("option")

    let opcaoEsportes = document.createElement("option")
    let opcaoEntretenimento = document.createElement("option")
    let opcaoPolitica = document.createElement("option")
    let opcaoPolicial = document.createElement("option")
    let opcaoDiversos = document.createElement("option")

    opcaoInicial.innerText = ""//pra categoria iniciar em branco
    opcaoEsportes.innerText = "Esportes"
    opcaoEntretenimento.innerText = "Entretenimento"
    opcaoPolitica.innerText = "Política"
    opcaoPolicial.innerText = "Policial"
    opcaoDiversos.innerText = "Diversos"

    categoria.appendChild(opcaoInicial)
    categoria.appendChild(opcaoEsportes)
    categoria.appendChild(opcaoEntretenimento)
    categoria.appendChild(opcaoPolitica)
    categoria.appendChild(opcaoPolicial)
    categoria.appendChild(opcaoDiversos)

    form.appendChild(categoria)

    form.innerHTML = form.innerHTML + "<br>"

    let tagTitulo = document.createElement("strong")
    tagTitulo.innerText = "Título"
    form.appendChild(tagTitulo)

    let titulo = document.createElement("input")
    titulo.classList.add("form-control")
    titulo.setAttribute("type", "text")
    titulo.setAttribute("placeholder", "Título")
    titulo.setAttribute("id", "titulo")

    form.appendChild(titulo)

    form.innerHTML = form.innerHTML + "<br>"

    let tagSubtitulo = document.createElement("strong")
    tagSubtitulo.innerText = "Subtítulo"
    form.appendChild(tagSubtitulo)

    let subtitulo = document.createElement("input")
    subtitulo.classList.add("form-control")
    subtitulo.setAttribute("type", "text")
    subtitulo.setAttribute("placeholder", "Subtítulo")
    subtitulo.setAttribute("id", "subtitulo")

    form.appendChild(subtitulo)

    form.innerHTML = form.innerHTML + "<br>"

    let tagConteudo = document.createElement("strong")
    tagConteudo.innerText = "Conteúdo"
    form.appendChild(tagConteudo)

    let conteudo = document.createElement("textarea")
    conteudo.classList.add("form-control")
    conteudo.setAttribute("placeholder", "Conteúdo da notícia")
    conteudo.setAttribute("rows", "5")
    conteudo.setAttribute("id", "conteudo")

    form.appendChild(conteudo)

    form.innerHTML = form.innerHTML + "<br>"

    let buttonCadastrar = document.createElement("button")
    let buttonResetar = document.createElement("button")

    buttonCadastrar.classList.add("btn", "btn-primary", "mr-2", "mb-2")
    buttonCadastrar.setAttribute("type", "button")
    buttonCadastrar.addEventListener("click", cadastrar)

    buttonResetar.classList.add("btn", "btn-light", "mr-2", "mb-2")
    buttonResetar.setAttribute("type", "reset")

    buttonCadastrar.innerText = "Cadastrar"
    buttonResetar.innerText = "Resetar"
    
    form.appendChild(buttonCadastrar)
    form.appendChild(buttonResetar)

    div.appendChild(form)
}

function cadastrar() {
    let select = document.querySelector("#categoria")
    let categoriaNoticia = select.options[select.selectedIndex].text
    let tituloNoticia = document.querySelector("#titulo").value
    let subtituloNoticia = document.querySelector("#subtitulo").value
    let conteudoNoticia = document.querySelector("#conteudo").value

    if ((categoriaNoticia == "") || (tituloNoticia == "") || (subtituloNoticia == "") || (conteudoNoticia == "")) {
        window.alert("Erro no cadastro!")
    } else {
        document.querySelector("#titulo").value = ""
        document.querySelector("#subtitulo").value = ""
        document.querySelector("#conteudo").value = ""

        window.alert("Cadastro realizado com sucesso!")
        colocaLista(categoriaNoticia, tituloNoticia, subtituloNoticia, conteudoNoticia)
    }
}

function colocaLista(categoria, titulo, subtitulo, conteudo) {
    if (categoria == "Esportes") {
        lista_esportes.push([titulo, subtitulo, conteudo, new Date()])
    } else if (categoria == "Entretenimento") {
        lista_entretenimento.push([titulo, subtitulo, conteudo, new Date()])
    } else if (categoria == "Política") {
        lista_politica.push([titulo, subtitulo, conteudo, new Date()])
    } else if (categoria == "Policial") {
        lista_policial.push([titulo, subtitulo, conteudo, new Date()])
    } else {
        lista_diversos.push([titulo, subtitulo, conteudo, new Date()])
    }
}

function criaNoticia(nomeLista) {
    if (nomeLista.length == 0) {
        div.appendChild(aviso)
    } else {
        for (let indice = 0; indice < nomeLista.length; indice++) {
            let divNoticia = document.createElement("div")
            divNoticia.setAttribute("id", indice)
            divNoticia.classList.add("bg-light","rounded","m-3","text-center")

            let tituloNoticia = document.createElement("h3")
            tituloNoticia.innerHTML = nomeLista[indice][0]
            divNoticia.appendChild(tituloNoticia)

            let subtituloNoticia = document.createElement("h5")
            subtituloNoticia.innerHTML = nomeLista[indice][1]
            subtituloNoticia.classList.add("font-italic")
            divNoticia.appendChild(subtituloNoticia)

            let conteudoNoticia = document.createElement("p")
            conteudoNoticia.innerHTML = nomeLista[indice][2]
            divNoticia.appendChild(conteudoNoticia)

            let dataNoticia = document.createElement("p")
            dataNoticia.innerHTML = nomeLista[indice][3]
            divNoticia.appendChild(dataNoticia)

            let buttonEditar = document.createElement("button")
            buttonEditar.classList.add("btn","btn-success","mr-2","mb-2")
            buttonEditar.addEventListener("click",editaNoticia)
            buttonEditar.innerText = "Editar"
            divNoticia.appendChild(buttonEditar)

            let buttonDeletar = document.createElement("button")
            buttonDeletar.classList.add("btn","btn-danger","mb-2")
            buttonDeletar.addEventListener("click",deletaNoticia)
            buttonDeletar.innerText = "Deletar"
            divNoticia.appendChild(buttonDeletar)

            div.appendChild(divNoticia)
        }
    }
}

function editaNoticia(){
    window.alert("Esta função ainda não foi implementada!")
}

function deletaNoticia(e){
    let nomeCategoria = div.children[0].innerText
    let divNoticia = e.target.parentElement
    let ID_divNoticia = divNoticia.id

    //removendo do site
    div.removeChild(divNoticia)

    //removendo da lista
    if(nomeCategoria == "Esportes"){
        lista_esportes.splice(ID_divNoticia,1)
        esportes()
    }else if(nomeCategoria == "Entretenimento"){
        lista_entretenimento.splice(ID_divNoticia,1)
        entretenimento()
    }else if(nomeCategoria == "Política"){
        lista_politica.splice(ID_divNoticia,1)
        politica()
    }else if(nomeCategoria == "Policial"){
        lista_policial.splice(ID_divNoticia,1)
        policial()
    }else{
        lista_diversos.splice(ID_divNoticia,1)
        diversos()
    }
}

function esportes() {
    div.innerHTML = ""

    nomeCategoria.innerText = "Esportes"

    div.appendChild(nomeCategoria)

    criaNoticia(lista_esportes)
}

function entretenimento() {
    div.innerHTML = ""

    nomeCategoria.innerText = "Entretenimento"

    div.appendChild(nomeCategoria)

    criaNoticia(lista_entretenimento)
}

function politica() {
    div.innerHTML = ""

    nomeCategoria.innerText = "Política"

    div.appendChild(nomeCategoria)

    criaNoticia(lista_politica)
}

function policial() {
    div.innerHTML = ""

    nomeCategoria.innerText = "Policial"

    div.appendChild(nomeCategoria)

    criaNoticia(lista_policial)
}

function diversos() {
    div.innerHTML = ""

    nomeCategoria.innerText = "Diversos"

    div.appendChild(nomeCategoria)

    criaNoticia(lista_diversos)
}
