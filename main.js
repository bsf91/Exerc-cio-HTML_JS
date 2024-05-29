document.getElementById('formA').addEventListener('submit', function(e) {

    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);

    if (campoB <= campoA) {

    e.preventDefault();
    alert('O número no campo A deve ser maior do que o no campo B.');
    } else {

    alert('Formulário enviado com sucesso!');
    }
});