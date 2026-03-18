document.addEventListener("DOMContentLoaded", function(){

    // ================= ALERTA =================
    alert("Bem-vindo ao site CineShop!");

    // ================= MENU INTERATIVO =================
    const linksMenu = document.querySelectorAll("nav a");

    linksMenu.forEach(link => {
        link.addEventListener("click", function(e){
            e.preventDefault();
            const id = this.getAttribute("href");
            const secao = document.querySelector(id);
            if(secao) secao.scrollIntoView({ behavior: "smooth" });
        });
    });

    window.addEventListener("scroll", function(){
        let scrollPos = window.scrollY;
        linksMenu.forEach(link => {
            const secao = document.querySelector(link.getAttribute("href"));
            if(secao){
                const topo = secao.offsetTop - 100;
                const altura = secao.offsetHeight;
                link.style.backgroundColor = (scrollPos >= topo && scrollPos < topo + altura) ? "#4a69bd" : "transparent";
            }
        });
    });

    // ================= INTERATIVIDADE =================
    const btnBoasVindas = document.getElementById("btnBoasVindas");
    const mensagem = document.getElementById("mensagem");
    if(btnBoasVindas){
        btnBoasVindas.addEventListener("click", function(){
            mensagem.textContent = "Bem-vindo ao meu site desenvolvido com HTML, CSS e JavaScript!";
        });
    }

    const btnAlterarTexto = document.getElementById("btnAlterarTexto");
    const textoSite = document.getElementById("textoSite");
    if(btnAlterarTexto){
        btnAlterarTexto.addEventListener("click", function(){
            textoSite.innerHTML = "Este site agora possui interatividade com JavaScript!";
        });
    }

    const btnCor = document.getElementById("btnCor");
    if(btnCor){
        btnCor.addEventListener("click", function(){
            document.querySelectorAll("section").forEach(secao => {
                secao.style.backgroundColor = "#cce5ff";
            });
        });
    }

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

    const imagem = document.getElementById("imagemCinema");
    const btnDarkMode = document.getElementById("btnDarkMode");
    let darkMode = false;
    if(btnDarkMode && imagem){
        btnDarkMode.addEventListener("click", function(){
            darkMode = !darkMode;
            document.body.classList.toggle("dark", darkMode);
            imagem.src = darkMode ? "cineshop2.png" : "cineshop.png";
        });
    }

    let contador = 0;
    const contadorBtn = document.getElementById("contadorBtn");
    const contadorTexto = document.getElementById("contador");
    if(contadorBtn){
        contadorBtn.addEventListener("click", function(){
            contador++;
            contadorTexto.textContent = contador;
        });
    }

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

    // ================= API VIA CEP =================
    const cepInput = document.getElementById("cep");
    if(cepInput){
        cepInput.addEventListener("blur", function(){
            const cep = this.value.replace(/\D/g, '');
            if(cep.length !== 8){ alert("CEP inválido!"); return; }

            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(dados => {
                    if(dados.erro){ alert("CEP não encontrado!"); return; }
                    document.getElementById("rua").value = dados.logradouro;
                    document.getElementById("bairro").value = dados.bairro;
                    document.getElementById("cidade").value = dados.localidade;
                    document.getElementById("estado").value = dados.uf;
                })
                .catch(()=>alert("Erro ao buscar o CEP."));
        });
    }

    // ================= API CNPJ =================
    const cnpjInput = document.getElementById("cnpj");
    if(cnpjInput){
        cnpjInput.addEventListener("blur", function(){
            const cnpj = this.value.replace(/\D/g, '');
            if(cnpj.length !== 14){ alert("CNPJ inválido!"); return; }

            fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
                .then(response => response.json())
                .then(dados => {
                    document.getElementById("empresa").value = dados.razao_social;
                    document.getElementById("situacao").value = dados.descricao_situacao_cadastral;
                    document.getElementById("cidadeCnpj").value = `${dados.municipio} / ${dados.uf}`;
                })
                .catch(()=>alert("Erro ao buscar CNPJ."));
        });
    }

    // ================= API IP =================
    fetch("http://ip-api.com/json/")
        .then(resp => resp.json())
        .then(dados => {
            document.getElementById("cidadeIP").value = dados.city;
            document.getElementById("estadoIP").value = dados.regionName;
            document.getElementById("paisIP").value = dados.country;
            document.getElementById("provedorIP").value = dados.isp;
        })
        .catch(()=>console.log("Erro ao buscar localização por IP"));

});
