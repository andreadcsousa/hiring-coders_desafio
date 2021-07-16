function salvaContatoLocalStorage() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const contato = { nome: nome, email: email, telefone: telefone };

  return localStorage.setItem("contato", JSON.stringify(contato));
}
