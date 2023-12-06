document.addEventListener('DOMContentLoaded', function () {
   
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {

        event.preventDefault();
        const email = document.getElementById('email').value;

        if (validateEmail(email)) {

            alert('Solicitação de recuperação de senha enviada para ' + email);
o
        } else {

            alert('Por favor, insira um e-mail válido.');
        }
    })
    });