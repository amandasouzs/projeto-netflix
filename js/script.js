document.getElementById("login_form").addEventListener("submit", function (e) {
    
    e.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    // verificar e-mail e senha
    if (email === "usuario@email.com" && senha === "senha") {
        alert("Login com sucesso!");
    } else {
        document.querySelector(".error-message").textContent = "Nome de usuário ou senha incorretos.";
    }
});
