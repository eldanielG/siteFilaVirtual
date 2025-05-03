function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,''); // Remove tudo que não for número
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

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    const cpf = document.getElementById('cpf').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (!validarCPF(cpf)) {
        errorMessage.textContent = 'CPF inválido!';
        return;
    }

    if (senha.length < 4) {
        errorMessage.textContent = 'Senha muito curta!';
        return;
    }

    // Se passou todas validações
    errorMessage.style.color = '#90ee90';
    errorMessage.textContent = 'Login efetuado com sucesso!';
    setTimeout(() => {
        window.location.href = "scan.html"; // ou qualquer outra página de destino
    }, 1000);
});