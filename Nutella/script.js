// Função para definir o mês/ano atual no campo "Mês/Ano"
function setCurrentMonth() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Ajusta para o formato "MM"
    const currentMonth = `${year}-${month}`;
    document.getElementById('mesAno').value = currentMonth;
}

// Função para definir a data atual no campo "Data Emissão"
function setCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    const year = today.getFullYear();
    const currentDate = `${day}/${month}/${year}`;
    document.getElementById('data-emissao').value = currentDate;
}

// Chama as funções ao carregar a página
window.onload = function() {
    setCurrentMonth();
    setCurrentDate();
};

// Função para imprimir o formulário
function imprimirForm() {
    window.print();
}

// Adicionar eventos de submissão de formulário
document.getElementById('checklistForm').addEventListener('submit', function(event) {
    event.preventDefault();
    imprimirForm();
});
