function cadastrar(event) {
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if ( usuario == 'admin' && email == 'admin@1' && senha == '123') {
        Swal.fire({
            title: 'Cadastro efetuado!',
            text: 'Bem-vindo, ' + usuario + '!',
            icon: 'success',
            confirmButtonText: "OK"
        }).then(() => {
            setTimeout(() => {
                location.href = "../index.html";
            }, 100);
        });
    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Dados inválidos. Tente novamente.',
            icon: 'error',
            confirmButtonText: "OK"
        });
    }
}
