function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0, resto;
    for (let i=1; i<=9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11-i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12-i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;

    return true;
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (nome.length < 3) {
        errorMessage.textContent = 'Nome deve ter pelo menos 3 letras.';
        return;
    }

    if (!validarCPF(cpf)) {
        errorMessage.textContent = 'CPF inválido!';
        return;
    }

    if (senha.length < 4) {
        errorMessage.textContent = 'Senha muito curta!';
        return;
    }

    // Cadastro "simulado" com sucesso
    errorMessage.style.color = '#67CB57';
    errorMessage.textContent = 'Cadastro realizado com sucesso!';
    setTimeout(() => {
        window.location.href = "login.html"; // Redireciona para login.html
    }, 1000);
});