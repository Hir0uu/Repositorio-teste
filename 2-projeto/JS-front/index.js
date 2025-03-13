const bntBuscar = document.getElementById('btnBuscar');

bntBuscar.addEventListener('click', () => {
    const cep = document.getElementById('cep').value;
    fetch (`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        return response.json();
    }).then ((data) => {
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('estado').value = data.uf;
    console.log(data)
    });
});
