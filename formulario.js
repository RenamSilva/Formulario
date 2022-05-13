const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;


    if (usernameValue === "") {
        setErrorFor(username, "Insira seu nome.");
        document.getElementById("botao").disabled = false;
    } else if (usernameValue.length < 3) {
        setErrorFor(username, "Por favor, insira um nome com pelo menos 3 caracteres.")

    } else if (usernameValue.length > 25) {
        setErrorFor(username, "Por favor, insira um nome com menos de 25 carateres.")

    } else {
        setSuccsessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "Insira seu endereço de email.");

    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");

    } else {
        setSuccsessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Insira uma senha.");

    } else if (passwordValue.length < 8) {
        setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres.");

    } else {
        setSuccsessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "Por favor, confirme sua senha.");

    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "A senha de confirmação deve ser igual a senha.");

    } else {
        setSuccsessFor(passwordConfirmation);
        document.getElementById("botao").disabled = false;
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    if (formIsValid) {

    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccsessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

let emailLista = []
let usuario = []
function verificacaoBotao() {
    document.getElementById("botao").classList.add("botao-cinza")
    document.getElementById("botao").disabled = true;

    for (let i = 0; i <= usuario.length; i++) {
        if (username.value == usuario[i]) {
            alert("Nome de usuário já existe")
            document.getElementById("botao").disabled = false;
            return
        }
    }
    for (let i = 0; i <= emailLista.length; i++) {
        if (email.value == emailLista[i]) {
            alert("Endereço de email já existe")
            document.getElementById("botao").disabled = false;
            return
        }
    }
    emailLista.push(email.value)
    usuario.push(username.value)

    setTimeout(
        function ativar_botao() {
            document.getElementById("botao").disabled = false;
            document.getElementById("botao").classList.remove("botao-cinza")
        }, 1000
    )
}