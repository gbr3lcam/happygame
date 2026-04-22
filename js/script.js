var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}

const form = document.getElementById("formCadastro");
const erro = document.getElementById("erro");

form.addEventListener("submit", function(event) {
    const user = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;

    erro.textContent = "";

    if (user.includes(" ")) {
        erro.textContent = "O nome de usuário não pode conter espaços.";
        event.preventDefault();
        return;
    }

    if (senha.length < 6) {
        erro.textContent = "A senha deve ter pelo menos 6 caracteres.";
        event.preventDefault();
        return;
    }
});