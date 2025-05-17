document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const senha = document.getElementById("password");
  const mensagem = document.getElementById("message");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const erros = [];

    if (!nome.value.trim()) erros.push("Nome é obrigatório.");
    if (!email.value.trim()) {
      erros.push("E-mail é obrigatório.");
    } else if (!validarEmail(email.value.trim())) {
      erros.push("Formato de e-mail inválido.");
    }
    if (!senha.value.trim()) erros.push("Senha é obrigatória.");
    if (!mensagem.value.trim()) erros.push("Mensagem é obrigatória.");

    if (erros.length > 0) {
      feedback.textContent = erros.join(" ");
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Formulário enviado com sucesso!";
      feedback.style.color = "green";
      form.reset();
    }
  });

  function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
