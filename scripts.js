const from = document.querySelector("#form");
const nomeinput = document.querySelector("#nome");
const emailinput = document.querySelector("#email");
const senhainput = document.querySelector("#senha");
const confsenhainput = document.querySelector("#confsenha");
const notf = document.querySelector("#notf");

from.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nomeinput.value === "") {
        alert("Preencha o campo nome")
        return;
    }

    if(emailinput.value === "" || !validarEmail(emailinput.value)) {
        alert("Preencha o campo email")
        return;
    }

    if(!validarSenha(senhainput.value, 8)) {
        alert("O campo senha deve ter no minimo 8 digitos")
        return;
    }

    if(confsenhainput.value === "") {
        alert("Preencha o campo confirmar senha")
        return;
    }

    if(confsenhainput.value !== senhainput.value) {
        alert("As senhas estão diferentes uma da outra")
        return;
    }

    if(notf.value === ""){
        alert("Selecione se deseja receber notificações")
    }



    from.submit();
})

function validarEmail(email){

    const emailregex = new RegExp(
        /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-z]{2,}$/
    );

    if(emailregex.test(email)) {
        return true;
    }

    return false;
}

function validarSenha(senha, minDigitos){
    if(senha.length >= minDigitos){

        return true;
    }
    
    return false;
}