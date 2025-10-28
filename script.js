const form = document.getElementById("loginForm"); // [cite: 101, 103]
const usuario = document.getElementById("usuario"); // [cite: 102, 104]
const senha = document.getElementById("senha"); // [cite: 105]
const mensagem = document.getElementById("mensagem"); // [cite: 105, 106]

form.addEventListener("submit", (e) => { // [cite: 107]
    e.preventDefault(); // evita o recarregamento da página [cite: 108]

    if (usuario.value === "" || senha.value === "") { // [cite: 109]
        mensagem.textContent = "Preencha todos os campos!"; // [cite: 110]
    } else if (usuario.value === "adm" && senha.value === "123") { // [cite: 110]
        mensagem.style.color = "#03dac6"; // [cite: 111]
        mensagem.textContent = "Login realizado com sucesso!"; // [cite: 112]
    } else { // [cite: 112]
        mensagem.textContent = "Usuário ou senha incorretos."; // [cite: 115]
    }
});