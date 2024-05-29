document.getElementById('formA').addEventListener('submit', function(e) {

    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);

    if (campoB <= campoA) {

    e.preventDefault();
    alert('O segundo número deve ser maior do que primeiro.');
    } else {

    alert('Formulário enviado com sucesso!');
    }
});