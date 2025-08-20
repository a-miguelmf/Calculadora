function inserir(valor) {
  document.getElementById("resultado").value += valor;
}

function limpar() {
  document.getElementById("resultado").value = "";
}

function apagar() {
  let campo = document.getElementById("resultado").value;
  document.getElementById("resultado").value = campo.substring(0, campo.length - 1);
}

function calcular() {
  try {
    document.getElementById("resultado").value = eval(document.getElementById("resultado").value);
  } catch {
    document.getElementById("resultado").value = "Erro";
  }
}
