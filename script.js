var elementosDuvida = document.querySelectorAll('.duvida')

// forEach() -> vai ser executada uma vez para cada elemento selecionado.
elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})

//fuction nome (argumento) {
    // conteúdo da função
// }