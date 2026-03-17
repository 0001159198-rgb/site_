document.addEventListener("DOMContentLoaded", function(){

    // ALERTA DE BOAS-VINDAS
    alert("Bem-vindo ao site CineShop!");

    // ================= MENU INTERATIVO =================

    const linksMenu = document.querySelectorAll("nav a");

    // Rolagem suave ao clicar no menu
    linksMenu.forEach(link => {
        link.addEventListener("click", function(e){
            e.preventDefault();

            const id = this.getAttribute("href");
            const secao = document.querySelector(id);

            if(secao){
                secao.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Destacar link ativo ao rolar a página
    window.addEventListener("scroll", function(){
        let scrollPos = window.scrollY;

        linksMenu.forEach(link => {
            const secao = document.querySelector(link.getAttribute("href"));

            if(secao){
                const topo = secao.offsetTop - 100;
                const altura = secao.offsetHeight;

                if(scrollPos >= topo && scrollPos < topo + altura){
                    link.style.backgroundColor = "#4a69bd";
                } else {
                    link.style.backgroundColor = "transparent";
                }
            }
        });
    });

    // ================= SEU CÓDIGO ORIGINAL =================

    // BOTÃO DE BOAS-VINDAS
    const btnBoasVindas = document.getElementById("btnBoasVindas");
    const mensagem = document.getElementById("mensagem");

    if(btnBoasVindas){
        btnBoasVindas.addEventListener("click", function(){
            mensagem.textContent = "Bem-vindo ao meu site desenvolvido com HTML, CSS e JavaScript!";
        });
    }

    // ALTERAR TEXTO
    const btnAlterarTexto = document.getElementById("btnAlterarTexto");
    const textoSite = document.getElementById("textoSite");

    if(btnAlterarTexto){
        btnAlterarTexto.addEventListener("click", function(){
            textoSite.innerHTML = "Este site agora possui interatividade com JavaScript!";
        });
    }

    // ALTERAR COR (melhorado: altera todas as seções)
    const btnCor = document.getElementById("btnCor");

    if(btnCor){
        btnCor.addEventListener("click", function(){
            document.querySelectorAll("section").forEach(secao => {
                secao.style.backgroundColor = "#cce5ff";
            });
        });
    }

    // MOSTRAR / ESCONDER INFORMAÇÕES
    const btnMostrar = document.getElementById("btnMostrar");
    const infoExtra = document.getElementById("infoExtra");

    if(btnMostrar){
        btnMostrar.addEventListener("click", function(){
            if(infoExtra.style.display === "none"){
                infoExtra.style.display = "block";
            } else {
                infoExtra.style.display = "none";
            }
        });
    }

    // DARK MODE + TROCA DE IMAGEM
    const imagem = document.getElementById("imagemCinema");
    const btnDarkMode = document.getElementById("btnDarkMode");
    let darkMode = false;

    if(btnDarkMode && imagem){
        btnDarkMode.addEventListener("click", function(){
            darkMode = !darkMode;
            document.body.classList.toggle("dark", darkMode);

            if(darkMode){
                imagem.src = "cineshop2.png";
            } else {
                imagem.src = "cineshop.png";
            }
        });
    }

    // CONTADOR
    let contador = 0;
    const contadorBtn = document.getElementById("contadorBtn");
    const contadorTexto = document.getElementById("contador");

    if(contadorBtn){
        contadorBtn.addEventListener("click", function(){
            contador++;
            contadorTexto.textContent = contador;
        });
    }

    // FORMULÁRIO
    const form = document.querySelector("form");
    const nome = document.getElementById("nome");

    if(form){
        form.addEventListener("submit", function(event){
            if(nome.value.trim() === ""){
                alert("O campo nome não pode estar vazio!");
                event.preventDefault();
            } else {
                alert("Cadastro realizado com sucesso!");
            }
        });
    }

});